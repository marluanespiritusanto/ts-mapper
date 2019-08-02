import { Types } from "./enums/types.enum";
import { Mapping } from "./mapping";
import { toType } from "./utils";

export class TypeMapper {
  private mappings: any[] = [];

  public createMap<ISource, IDest>(source: new () => ISource, dest: new () => IDest): Mapping<ISource, IDest> {
    const mapping = new Mapping<ISource, IDest>(source, dest);
    this.mappings.push(mapping);
    return mapping;
  }

  public mapTo<ISource, IDest>(source: ISource | any, destination: IDest | any): IDest {
    const src = source.constructor.name;
    const dst = destination.constructor.name;
    const [mapping] = this.mappings.filter(map => map.source === src && map.dest === dst);

    const i = mapping as Mapping<ISource, IDest>;
    const { items } = i;

    for (const item of items) {
      const {
        sourcePredicate,
        destinationKey,
        check = () => true,
        type = Types.STRING
      } = item;

      const rawValue = sourcePredicate(source);

      const checkResult: boolean = check(source, destination);
      if (!checkResult) { continue; }

      const typedValue = toType(type, rawValue);
      destination[destinationKey] = typedValue;
    }

    return destination;
  }

  public map<TSource, TDest>(source: TSource, destConstructor: new () => TDest): TDest {
    const destination = new destConstructor();
    return this.mapTo<TSource, TDest>(source, destination);
  }

  public mapCollection<TSource, TDest>(sources: TSource[], destConstructor: new () => TDest): TDest[] {
    const destination = new destConstructor();
    return sources.map<TDest>((source: TSource) => this.mapTo(source, destination));
  }
}
