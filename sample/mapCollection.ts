import { Mapper } from "./mapper/mapper";
import { Animal } from "./models/animal";
import { AnimalDto } from "./models/animal.dto";

class Main {
   public static run() {
      const human = new AnimalDto();
      human.firstname = "Vlad";
      human.lastname = "Haidei";

      const dog = new AnimalDto();
      human.firstname = "Bob";
      human.lastname = "Doggy";

      const mapper = new Mapper();

      const animals = mapper.mapCollectionTo([human, dog], Animal);

      console.log('animals', animals);
   }
}

Main.run();
