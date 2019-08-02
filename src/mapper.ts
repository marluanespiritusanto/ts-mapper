import { Types } from "./enums/types.enum";
import { IMapper } from "./interfaces/mapper.interface";
import { Mapping } from "./mapping";
import { toType } from "./utils";

export class Mapper implements IMapper{
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

    const { items } = mapping as Mapping<ISource, IDest>;

    Object.keys(items)
      .forEach(destinationKey => {
        const item = items[destinationKey];

        const {
          sourcePredicate,
          check = () => true,
          type = Types.STRING
        } = item;
    
        const checkResult: boolean = check(source, destination);
        if (!checkResult) { return; }
  
        const rawValue = sourcePredicate(source);
        const typedValue = toType(type, rawValue);
        destination[destinationKey] = typedValue;
      });

    return destination;
  }

  public map<TSource, TDest>(source: TSource, destConstructor: new () => TDest): TDest {
    const destination = new destConstructor();
    return this.mapTo<TSource, TDest>(source, destination);
  }

  public mapCollection<TSource, TDest>(sources: TSource[], destConstructor: new () => TDest): TDest[] {
    return sources.map<TDest>((source: TSource) => this.map(source, destConstructor));
  }
}
