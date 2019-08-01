"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var mapping_1 = __importDefault(require("./mapping"));
var utils_1 = require("./utils");
var types_enum_1 = require("./enums/types.enum");
var TypeMapper = /** @class */ (function () {
    function TypeMapper() {
        this.mappings = [];
    }
    TypeMapper.prototype.createMap = function (source, dest) {
        var mapping = new mapping_1.default(source, dest);
        this.mappings.push(mapping);
        return mapping;
    };
    TypeMapper.prototype.map = function (source, destination) {
        var src = source.constructor.name;
        var dst = destination.constructor.name;
        var mapping = this.mappings.filter(function (map) { return map.source === src && map.dest === dst; })[0];
        var i = mapping;
        var items = i.items;
        for (var _i = 0, items_1 = items; _i < items_1.length; _i++) {
            var item = items_1[_i];
            var sourcePredicate = item.sourcePredicate, destinationPredicate = item.destinationPredicate, _a = item.check, check = _a === void 0 ? function () { return true; } : _a, _b = item.type, type = _b === void 0 ? types_enum_1.Types.STRING : _b;
            var sourceKey = utils_1.getKeyFromPredicate(sourcePredicate);
            var destinationKey = utils_1.getKeyFromPredicate(destinationPredicate);
            var checkResult = check(source, destination);
            if (!checkResult)
                continue;
            var rawValue = source[sourceKey];
            var typedValue = utils_1.toType(type, rawValue);
            destination[destinationKey] = typedValue;
        }
        return destination;
    };
    TypeMapper.prototype.mapCollection = function (sources, destination) {
        var _this = this;
        return sources.map(function (source) { return _this.map(source, destination); });
    };
    TypeMapper.prototype.mapTo = function (source, destConstructor) {
        var destination = new destConstructor();
        return this.map(source, destination);
    };
    TypeMapper.prototype.mapCollectionTo = function (sources, destConstructor) {
        var _this = this;
        var destination = new destConstructor();
        return sources.map(function (source) { return _this.map(source, destination); });
    };
    return TypeMapper;
}());
exports.TypeMapper = TypeMapper;
//# sourceMappingURL=typemapper.js.map