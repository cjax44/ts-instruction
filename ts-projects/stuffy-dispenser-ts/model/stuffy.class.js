"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Stuffy = /** @class */ (function () {
    function Stuffy(inId, inType, inColor, inSize, inLimbs) {
        this.id = inId;
        this.type = inType;
        this.color = inColor;
        this.size = inSize;
        this.limbs = inLimbs;
    }
    Stuffy.prototype.about = function () {
        return "Stuffy:  id=" + this.id + ", type=" + this.type + ", color=" + this.color + ", size=" + this.size + ", limbs=" + this.limbs;
    };
    return Stuffy;
}());
exports.Stuffy = Stuffy;
