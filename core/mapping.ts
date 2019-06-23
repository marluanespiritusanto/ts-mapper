import { IMapping, IMappingItems } from "./interfaces/typemapper.interface";
import { Types } from "./enums/types.enum";

class Mapping<ISource, IDest> implements IMapping<ISource, IDest> {
   items: IMappingItems[] = [];

   private get lastItem(): IMappingItems {
      return this.items[this.items.length - 1];
   }

   map(source: (type: ISource) => any, destination: (type: IDest) => any): IMapping<ISource, IDest> {
      this.items.push({
         destinationPredicate: destination,
         sourcePredicate: source
      });

      return this;
   }

   conditions = (check: (s: ISource, d?: IDest) => boolean): IMapping<ISource, IDest> => {
      this.lastItem.check = check;
      return this;
   };

   is(type: Types): IMapping<ISource, IDest> {
      this.lastItem.type = type;
      return this;
   }
}

export default Mapping;
