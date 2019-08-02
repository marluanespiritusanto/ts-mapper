import { IMappingItems } from "./typemapper.interface";
import { Types } from "../enums/types.enum";

export interface IMapping<ISource, IDestination> {
   items: IMappingItems[];
   mapFrom(sourcePredicate: (type?: ISource) => any, destinationPredicate: (type?: IDestination) => any): IMapping<ISource, IDestination>;
   conditions(check: (s: ISource, d?: IDestination) => boolean): IMapping<ISource, IDestination>;
   is(type: Types): IMapping<ISource, IDestination>;
}
