import { TypeMapper } from "../core/typemapper";
import { Animal, AnimalDto } from "./main";

export class Mapper extends TypeMapper {
  constructor() {
    super();
    this.config();
  }

  private config(): void {
    this.createMap<Animal, AnimalDto>("Animal", "AnimalDto").map(
      p => p.name,
      p => p.name
    );
  }
}
