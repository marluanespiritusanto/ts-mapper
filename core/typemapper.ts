import { ITypeMapper } from "./interfaces/typemapper.interface";
import Mapping from "./mapping";
import { getKeyFromPredicate, toType } from "./utils";
import { Types } from "./enums/types.enum";

export class TypeMapper implements ITypeMapper {
  private mappings: any[] = [];

  createMap<ISource, IDest>(
    source: string,
    dest: string
  ): Mapping<ISource, IDest> {
    const mapping = new Mapping<ISource, IDest>(source, dest);
    this.mappings.push(mapping);
    return mapping;
  }

  map<ISource, IDest>(source: ISource | any, destination: IDest | any): IDest {
    const src = source.constructor.name;
    const dst = destination.constructor.name;
    const mapping = this.mappings.filter(
      map => map.source === src && map.dest === dst
    )[0];

    const i = mapping as Mapping<ISource, IDest>;
    const { items } = i;

    for (const item of items) {
      const {
        sourcePredicate,
        destinationPredicate,
        check = () => true,
        type = Types.STRING
      } = item;

      const sourceKey = getKeyFromPredicate(sourcePredicate);
      const destinationKey = getKeyFromPredicate(destinationPredicate);

      const checkResult: boolean = check(source, destination);
      if (!checkResult) continue;

      const rawValue = (<any>source)[sourceKey];
      const typedValue = toType(type, rawValue);
      (<any>destination)[destinationKey] = typedValue;
    }

    return destination;
  }

  mapCollection<ISource, IDest>(sources: ISource[], destination: IDest): any {
    return sources.map((source: ISource) => this.map(source, destination));
  }

  mapTo<TSource, TDest>(source: TSource, destConstructor: { new(): TDest; }): TDest {
    const destination = new destConstructor();
    return this.map<TSource, TDest>(source, destination);
  }

  mapCollectionTo<TSource, TDest>(sources: TSource[], destConstructor: { new(): TDest; }): TDest[] {
    const destination = new destConstructor();
    return sources.map<TDest>((source: TSource) => this.map(source, destination));
  }
}
