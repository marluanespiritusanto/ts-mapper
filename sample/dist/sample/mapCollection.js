"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mapper_1 = require("./mapper/mapper");
var animal_1 = require("./models/animal");
var animal_dto_1 = require("./models/animal.dto");
var Main = /** @class */ (function () {
    function Main() {
    }
    Main.run = function () {
        var human = new animal_dto_1.AnimalDto();
        human.firstname = "Vlad";
        human.lastname = "Haidei";
        var dog = new animal_dto_1.AnimalDto();
        human.firstname = "Bob";
        human.lastname = "Doggy";
        var mapper = new mapper_1.Mapper();
        var animals = mapper.mapCollection([human, dog], animal_1.Animal);
        console.log('animals', animals);
    };
    return Main;
}());
Main.run();
