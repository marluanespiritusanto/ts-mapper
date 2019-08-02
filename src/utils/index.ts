import { Types } from "../enums/types.enum";

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
