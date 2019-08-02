import { Mapper } from "../../src/mapper";
import { Animal } from "../models/animal";
import { AnimalDto } from "../models/animal.dto";

export class TypeMapper extends Mapper {
  constructor() {
    super();
    this.config();
  }

  private config(): void {
    this.createMap(AnimalDto, Animal)
      .forMember('name', p => `${p.firstname} ${p.lastname}`);
  }
}
