import { IMapping, IMappingItems } from "./interfaces/typemapper.interface";
import { Types } from "./enums/types.enum";
declare class Mapping<ISource, IDest> implements IMapping<ISource, IDest> {
    source: string;
    dest: string;
    items: IMappingItems[];
    constructor(source: string, dest: string);
    private readonly lastItem;
    map(source: (type: ISource) => any, destination: (type: IDest) => any): IMapping<ISource, IDest>;
    conditions: (check: (s: ISource, d?: IDest | undefined) => boolean) => IMapping<ISource, IDest>;
    is(type: Types): IMapping<ISource, IDest>;
}
export default Mapping;
