"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var types_enum_1 = require("../enums/types.enum");
exports.getKeyFromPredicate = function (predicate) {
    var array = predicate.toString().split(".");
    var splitted = array[array.length - 1];
    if (splitted.includes(";")) {
        return splitted.substr(0, splitted.indexOf(";"));
    }
    return splitted;
};
exports.toType = function (type, value) {
    if (value === void 0) { value = ""; }
    try {
        switch (type) {
            case types_enum_1.Types.STRING:
                return value.toString();
            case types_enum_1.Types.NUMBER:
                if (isNaN(value))
                    throw new Error();
                return parseInt(value);
            default:
                return value;
        }
    }
    catch (err) {
        throw new Error("Can't parse '" + value + "' to type '" + type + "'");
    }
};
//# sourceMappingURL=index.js.map