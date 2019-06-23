import { Types } from "../enums/types.enum";

export const getKeyFromPredicate = (predicate: Function): string => {
   const splitted = /\.([^\.;]+);?\s*\}$/.exec(predicate.toString());
   return splitted && splitted.length > 1 ? splitted[1] : "";
};

export const toType = (type: Types, value: any = "") => {
   try {
      switch (type) {
         case Types.STRING:
            return value.toString();
         case Types.NUMBER:
            if (isNaN(value)) throw new Error();
            return parseInt(value);
         default:
            return value;
      }
   } catch (err) {
      throw new Error(`Can't parse '${value}' to type '${type}'`);
   }
};
