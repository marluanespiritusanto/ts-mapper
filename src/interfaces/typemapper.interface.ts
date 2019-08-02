import { Types } from "../enums/types.enum";

export interface IMapping<S, D> {
   items: IMappingItem<S, D>[];
   forMember<DKey extends keyof D>(destinationKey: DKey, sourcePredicate: (type: S) => any): IMapping<S, D>;
   conditions(check: (s: S, d?: D) => boolean): IMapping<S, D>;
   is(type: Types): IMapping<S, D>;
}

export interface IMappingItem<S, D>{
   sourcePredicate: (s: S) => any;
   destinationKey: string;
   type?: Types;
   check?: (s: S, d: D) => boolean;
}
