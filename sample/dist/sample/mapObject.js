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
        var mapper = new mapper_1.Mapper();
        var animal = mapper.map(human, animal_1.Animal);
        console.log('animal', animal);
    };
    return Main;
}());
Main.run();
