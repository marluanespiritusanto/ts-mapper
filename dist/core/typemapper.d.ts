import { ITypeMapper } from "./interfaces/typemapper.interface";
import Mapping from "./mapping";
export declare class TypeMapper implements ITypeMapper {
    private mappings;
    createMap<ISource, IDest>(source: string, dest: string): Mapping<ISource, IDest>;
    map<ISource, IDest>(source: ISource | any, destination: IDest | any): IDest;
    mapCollection<ISource, IDest>(sources: ISource[], destination: IDest): any;
    mapTo<TSource, TDest>(source: TSource, destConstructor: {
        new (): TDest;
    }): TDest;
    mapCollectionTo<TSource, TDest>(sources: TSource[], destConstructor: {
        new (): TDest;
    }): TDest[];
}
