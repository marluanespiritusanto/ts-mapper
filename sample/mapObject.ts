import { Mapper } from "./mapper/mapper";
import { Animal } from "./models/animal";
import { AnimalDto } from "./models/animal.dto";

class Main {
   public static run() {
      const human = new AnimalDto();
      human.firstname = "Vlad";
      human.lastname = "Haidei";

      const mapper = new Mapper();

      const animal = mapper.mapTo(human, Animal);

      console.log('animal', animal);
   }
}
Main.run();
