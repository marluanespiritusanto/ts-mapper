"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Mapping = /** @class */ (function () {
    function Mapping() {
        var _this = this;
        this.items = [];
        this.conditions = function (check) {
            _this.lastItem.check = check;
            return _this;
        };
    }
    Object.defineProperty(Mapping.prototype, "lastItem", {
        get: function () {
            return this.items[this.items.length - 1];
        },
        enumerable: true,
        configurable: true
    });
    Mapping.prototype.map = function (source, destination) {
        this.items.push({
            destinationPredicate: destination,
            sourcePredicate: source
        });
        return this;
    };
    Mapping.prototype.is = function (type) {
        this.lastItem.type = type;
        return this;
    };
    return Mapping;
}());
exports.default = Mapping;
//# sourceMappingURL=mapping.js.map