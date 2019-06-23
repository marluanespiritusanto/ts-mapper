import { Mapper } from "./mapper";

export class Animal {
   name: string;
   color: string;
   age: number;
}

export class AnimalDto {
   name: string;
}

class Main {
   static run() {
      const dog = new Animal();
      dog.name = "Bobby";

      const mapper = new Mapper();

      const f = mapper.map<Animal, AnimalDto>(dog, AnimalDto);
      const d = mapper.mapCollection<Animal, AnimalDto>([dog, dog], AnimalDto);
   }
}

Main.run();
