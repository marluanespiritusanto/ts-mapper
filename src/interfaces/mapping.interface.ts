import { Types } from "../enums/types.enum";
import { IMappingItem } from "./mappingItem.interface";

export interface IMapping<S, D> {
   items:  { [key: string]:IMappingItem<S, D>};
   forMember<DKey extends keyof D>(destinationKey: DKey, sourcePredicate: (type: S) => any): IMapping<S, D>;
   conditions(check: (s: S, d?: D) => boolean): IMapping<S, D>;
   is(type: Types): IMapping<S, D>;
}
