import { Types } from "./enums/types.enum";
import { IMapping } from "./interfaces/mapping.interface";
import { IMappingItem } from "./interfaces/mappingItem.interface";
import { MappingItem } from "./mappingItem";

export class Mapping<S, D> implements IMapping<S, D> {
  public items: { [key: string]:IMappingItem<S, D>} = {};
  public source: string;
  public dest: string;
  private lastItemKey: string = '';

  constructor(source: new () => S, dest: new () => D) {
    this.source = source.name;
    this.dest = dest.name;

    const s = new source();
    const d = new dest() as any;

    Object.keys(s)
      .forEach(sourceKey => {

        if(d[sourceKey] !== undefined) {
          this.forMember(sourceKey as keyof D, (p:any) => p[sourceKey]);
        }
      });
  }

  public forMember<K extends keyof D>(destinationKey: K, sourcePredicate: (type: S) => any): IMapping<S, D> {
    this.items[destinationKey as string] = new MappingItem(destinationKey as string, sourcePredicate);
    this.lastItemKey = destinationKey as string;
    return this;
  }

  public conditions = (check: (s: S, d?: D) => boolean): IMapping<S, D> => {
    this.lastItem.check = check;
    return this;
  };

  public is(type: Types): IMapping<S, D> {
    this.lastItem.type = type;
    return this;
  }

  private get lastItem(): IMappingItem<S, D> {
    return this.items[this.lastItemKey];
  }
}
