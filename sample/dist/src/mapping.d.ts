import { Types } from "./enums/types.enum";
import { IMapping, IMappingItem } from "./interfaces/typemapper.interface";
export declare class Mapping<S, D> implements IMapping<S, D> {
    items: IMappingItem<S, D>[];
    source: string;
    dest: string;
    constructor(source: new () => S, dest: new () => D);
    forMember<K extends keyof D>(destinationKey: K, sourcePredicate: (type: S) => any): IMapping<S, D>;
    conditions: (check: (s: S, d?: D | undefined) => boolean) => IMapping<S, D>;
    is(type: Types): IMapping<S, D>;
    private readonly lastItem;
    private addMapping;
}
