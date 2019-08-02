import { Mapping } from "./mapping";
export declare class TypeMapper {
    private mappings;
    createMap<ISource, IDest>(source: new () => ISource, dest: new () => IDest): Mapping<ISource, IDest>;
    mapTo<ISource, IDest>(source: ISource | any, destination: IDest | any): IDest;
    map<TSource, TDest>(source: TSource, destConstructor: new () => TDest): TDest;
    mapCollection<TSource, TDest>(sources: TSource[], destConstructor: new () => TDest): TDest[];
}
