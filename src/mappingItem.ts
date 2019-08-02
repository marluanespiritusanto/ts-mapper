import { IMappingItem } from "./interfaces/typemapper.interface";

export class MappingItem<S,D> implements IMappingItem<S,D> {
    public sourcePredicate: (s: S) => any;
    public destinationKey: string;
    public type?: import("./enums/types.enum").Types | undefined;
    public check?: ((s: S, d: D) => boolean) | undefined;

    constructor(destinationKey: string, sourcePredicate: (s: S) => any) {
        this.destinationKey = destinationKey;
        this.sourcePredicate = sourcePredicate;
    }
}