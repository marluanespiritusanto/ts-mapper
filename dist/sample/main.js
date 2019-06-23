"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mapper_1 = require("./mapper");
var Animal = /** @class */ (function () {
    function Animal() {
        (this.name = ""), (this.color = ""), (this.age = 0);
    }
    return Animal;
}());
exports.Animal = Animal;
var AnimalDto = /** @class */ (function () {
    function AnimalDto() {
        this.bio = "sfd";
        this.email = "sdf";
        this.id = 0;
        this.lastname = "dsf";
        this.name = "dsf";
        this.username = "dfs";
    }
    return AnimalDto;
}());
exports.AnimalDto = AnimalDto;
var Main = /** @class */ (function () {
    function Main() {
    }
    Main.run = function () {
        var dog = new Animal();
        dog.name = "Bobby";
        var mapper = new mapper_1.Mapper();
        var f = mapper.map(dog, new AnimalDto());
        var d = mapper.mapCollection([dog, dog], new AnimalDto());
    };
    return Main;
}());
Main.run();
//# sourceMappingURL=main.js.map