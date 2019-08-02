import { Types } from "../enums/types.enum";

export interface IMappingItem<S, D>{
   sourcePredicate: (s: S) => any;
   destinationKey: string;
   type?: Types;
   check?: (s: S, d: D) => boolean;
}
