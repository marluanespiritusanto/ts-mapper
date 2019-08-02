import { TypeMapper } from "./mapper/mapper";
import { Animal } from "./models/animal";
import { AnimalDto } from "./models/animal.dto";

class Main {
   public static run() {
      const human = new AnimalDto();
      human.firstname = "Vlad";
      human.lastname = "Haidei";
      human.age = 21;

      const animal = new Animal();
      animal.age = 18;
      animal.color = 'brown';

      const mapper = new TypeMapper();

      // mapper.map() is mutable
      const result = mapper.mapTo<AnimalDto, Animal>(human, animal);

      console.log('result:', result);
      console.log('animal:', animal);
      console.log(result === animal);
   }
}

Main.run();
