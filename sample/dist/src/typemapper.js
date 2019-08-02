"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var types_enum_1 = require("./enums/types.enum");
var mapping_1 = require("./mapping");
var utils_1 = require("./utils");
var TypeMapper = /** @class */ (function () {
    function TypeMapper() {
        this.mappings = [];
    }
    TypeMapper.prototype.createMap = function (source, dest) {
        var mapping = new mapping_1.Mapping(source, dest);
        this.mappings.push(mapping);
        return mapping;
    };
    TypeMapper.prototype.mapTo = function (source, destination) {
        var src = source.constructor.name;
        var dst = destination.constructor.name;
        var mapping = this.mappings.filter(function (map) { return map.source === src && map.dest === dst; })[0];
        var i = mapping;
        var items = i.items;
        for (var _i = 0, items_1 = items; _i < items_1.length; _i++) {
            var item = items_1[_i];
            var sourcePredicate = item.sourcePredicate, destinationKey = item.destinationKey, _a = item.check, check = _a === void 0 ? function () { return true; } : _a, _b = item.type, type = _b === void 0 ? types_enum_1.Types.STRING : _b;
            var rawValue = sourcePredicate(source);
            var checkResult = check(source, destination);
            if (!checkResult) {
                continue;
            }
            var typedValue = utils_1.toType(type, rawValue);
            destination[destinationKey] = typedValue;
        }
        return destination;
    };
    TypeMapper.prototype.map = function (source, destConstructor) {
        var destination = new destConstructor();
        return this.mapTo(source, destination);
    };
    TypeMapper.prototype.mapCollection = function (sources, destConstructor) {
        var _this = this;
        var destination = new destConstructor();
        return sources.map(function (source) { return _this.mapTo(source, destination); });
    };
    return TypeMapper;
}());
exports.TypeMapper = TypeMapper;
