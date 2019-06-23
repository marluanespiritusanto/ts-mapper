import { Mapper } from "./mapper";

export class Animal {
   name: string;
   color: string;
   age: number;

   constructor() {
      (this.name = ""), (this.color = ""), (this.age = 0);
   }
}

export class AnimalDto {
   id: number;

   name: string;

   lastname: string;

   username: string;

   email: string;

   bio: string;

   constructor() {
      this.bio = "sfd";
      this.email = "sdf";
      this.id = 0;
      this.lastname = "dsf";
      this.name = "dsf";
      this.username = "dfs";
   }
}

class Main {
   static run() {
      const dog = new Animal();
      dog.name = "Bobby";

      const mapper = new Mapper();

      const f = mapper.map<Animal, AnimalDto>(dog, new AnimalDto());
      const d = mapper.mapCollection<Animal, AnimalDto>([dog, dog], new AnimalDto());
   }
}

Main.run();
