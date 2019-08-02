"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mappingItem_1 = require("./mappingItem");
var Mapping = /** @class */ (function () {
    function Mapping(source, dest) {
        var _this = this;
        this.items = [];
        this.conditions = function (check) {
            _this.lastItem.check = check;
            return _this;
        };
        this.source = source.name;
        this.dest = dest.name;
    }
    Mapping.prototype.forMember = function (destinationKey, sourcePredicate) {
        var item = new mappingItem_1.MappingItem(destinationKey, sourcePredicate);
        this.addMapping(item);
        return this;
    };
    Mapping.prototype.is = function (type) {
        this.lastItem.type = type;
        return this;
    };
    Object.defineProperty(Mapping.prototype, "lastItem", {
        get: function () {
            return this.items[this.items.length - 1];
        },
        enumerable: true,
        configurable: true
    });
    Mapping.prototype.addMapping = function (item) {
        this.items.push(item);
    };
    return Mapping;
}());
exports.Mapping = Mapping;
