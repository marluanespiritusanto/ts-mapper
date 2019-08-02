import { Types } from "./enums/types.enum";
import { IMapping, IMappingItem } from "./interfaces/typemapper.interface";
import { MappingItem } from "./mappingItem";

export class Mapping<S, D> implements IMapping<S, D> {
  public items: IMappingItem<S, D>[] = [];
  public source: string;
  public dest: string;

  constructor(source: new () => S, dest: new () => D) {
    this.source = source.name;
    this.dest = dest.name;
  }

  public forMember<K extends keyof D>(destinationKey: K, sourcePredicate: (type: S) => any): IMapping<S, D> {
    const item = new MappingItem(destinationKey as string, sourcePredicate);
    this.addMapping(item);
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
    return this.items[this.items.length - 1];
  }

  private addMapping(item: IMappingItem<S, D>): void {
    this.items.push(item);
  }
}
