"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var product_class_1 = require("../model/product.class");
var ProductService = /** @class */ (function () {
    function ProductService() {
        this.products = [];
    }
    ProductService.prototype.initializeList = function () {
        var p1 = new product_class_1.Product("108-0P", "Hi def TV", 899.99);
        var p2 = new product_class_1.Product("L33-75", "Gaming Computer", 1499.99);
        var p3 = new product_class_1.Product("T04-5T", "Bread warming device", 79.99);
        var p4 = new product_class_1.Product("B4L-L5", "Razor - Handheld", 19.99);
        var p5 = new product_class_1.Product("W33-D5", "Glass-Blown Bowl", 99.99);
        this.products = [p1, p2, p3, p4, p5];
    };
    ProductService.prototype.listProducts = function () {
        this.products.forEach(function (p) {
            console.log(p.about());
        });
    };
    ProductService.prototype.getProductByCode = function (code) {
        var product = new product_class_1.Product("na", "na", 0);
        this.products.forEach(function (p) {
            if (p.code == code) {
                product = p;
            }
        });
        if (product.code == "na") {
            console.log("That product code doesn't exist");
        }
        else {
            console.log("The product with code: " + product.code + " is " + product.about());
        }
        ;
    };
    ProductService.prototype.addProduct = function (newProduct) {
        this.products.push(newProduct);
    };
    ProductService.prototype.removeByCode = function (code) {
        var _this = this;
        this.products.forEach(function (p) {
            if (p.code == code) {
                var idx = _this.products.indexOf(p);
                _this.products.splice(idx, 1);
            }
        });
    };
    return ProductService;
}());
exports.ProductService = ProductService;
