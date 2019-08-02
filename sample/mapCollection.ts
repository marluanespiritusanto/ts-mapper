import { TypeMapper } from "./mapper/mapper";
import { Animal } from "./models/animal";
import { AnimalDto } from "./models/animal.dto";

class Main {
   public static run() {
      const human = new AnimalDto();
      human.firstname = "Vlad";
      human.lastname = "Haidei";
      human.age = 18;

      const dog = new AnimalDto();
      dog.firstname = "Bob";
      dog.lastname = "Doggy";
      dog.age = 3;

      const mapper = new TypeMapper();

      const animals = mapper.mapCollection([human, dog], Animal);

      console.log('animals', animals);
   }
}

Main.run();
