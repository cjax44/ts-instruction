"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var product_1 = require("./product");
// create an instance of Product
var p1 = new product_1.Product("java", "Murach's Java", 57.50);
// print the information of Product to console
console.log(p1.about());
