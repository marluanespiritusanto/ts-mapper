import { TypeMapper } from "../../src/typemapper";
import { Animal } from "../models/animal";
import { AnimalDto } from "../models/animal.dto";

export class Mapper extends TypeMapper {
  constructor() {
    super();
    this.config();
  }

  private config(): void {
    this.createMap<AnimalDto, Animal>("AnimalDto", "Animal").map(
      p => `${p.firstname} ${p.lastname}`,
      p => p.name
    );
  }
}
