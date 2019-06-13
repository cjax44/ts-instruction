"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Product = /** @class */ (function () {
    function Product(c, d, p) {
        this.code = c;
        this.description = d;
        this.price = p;
    }
    Product.prototype.about = function () {
        return "Product: code = " + this.code +
            ", description = " + this.description +
            ", price = " + this.price;
    };
    return Product;
}());
exports.Product = Product;
