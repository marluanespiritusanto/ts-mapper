import { IMappingItem } from "./interfaces/typemapper.interface";
export declare class MappingItem<S, D> implements IMappingItem<S, D> {
    sourcePredicate: (s: S) => any;
    destinationKey: string;
    type?: import("./enums/types.enum").Types | undefined;
    check?: ((s: S, d: D) => boolean) | undefined;
    constructor(destinationKey: string, sourcePredicate: (s: S) => any);
}
