"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var typemapper_1 = require("../core/typemapper");
var Mapper = /** @class */ (function (_super) {
    __extends(Mapper, _super);
    function Mapper() {
        var _this = _super.call(this) || this;
        _this.config();
        return _this;
    }
    Mapper.prototype.config = function () {
        this.createMap().map(function (p) { return p.name; }, function (p) { return p.name; });
    };
    return Mapper;
}(typemapper_1.TypeMapper));
exports.Mapper = Mapper;
//# sourceMappingURL=mapper.js.map