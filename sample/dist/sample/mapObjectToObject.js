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
        var animal = new animal_1.Animal();
        animal.age = 18;
        animal.color = 'brown';
        var mapper = new mapper_1.Mapper();
        // mapper.map() is mutable
        var result = mapper.mapTo(human, animal);
        console.log('result:', result);
        console.log('animal:', animal);
        console.log(result === animal);
    };
    return Main;
}());
Main.run();
