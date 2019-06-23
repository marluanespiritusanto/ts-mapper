import { Types } from "../enums/types.enum";

export interface IMapper {
   sourcePredicate: Function;
   destinationPredicate: Function;
   type?: Types;
   check?: (s: any, d: any) => boolean;
}
