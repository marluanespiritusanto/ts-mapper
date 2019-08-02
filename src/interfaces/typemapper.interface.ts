import { Types } from "../enums/types.enum";

export interface ITypeMapper {}

export interface IMapping<ISource, IDestination> {
   items: IMappingItems[];
   map(sourcePredicate: (type: ISource) => any, destinationPredicate: (type: IDestination) => any): IMapping<ISource, IDestination>;
   conditions(check: (s: ISource, d?: IDestination) => boolean): IMapping<ISource, IDestination>;
   is(type: Types): IMapping<ISource, IDestination>;
}

export interface IMappingItems {
   sourcePredicate: Function;
   destinationPredicate: Function;
   type?: Types;
   check?: (s: any, d: any) => boolean;
}
