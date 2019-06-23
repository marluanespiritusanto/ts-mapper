import { ITypeMapper } from "./interfaces/typemapper.interface";
import Mapping from "./mapping";
export declare class TypeMapper implements ITypeMapper {
    private mappings;
    createMap<ISource, IDest>(): Mapping<ISource, IDest>;
    map<ISource, IDest>(source: ISource, destination: IDest): IDest;
    mapCollection<ISource, IDest>(sources: ISource[], destination: IDest): any;
}
