"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var product_class_1 = require("../model/product.class");
var product_service_1 = require("../service/product.service");
var productSvc = new product_service_1.ProductService();
//initialize list
productSvc.initializeList();
//display
productSvc.listProducts();
//get by id
var code = "108-0P";
productSvc.getProductByCode(code);
//add
console.log("adding a product");
var newProd = new product_class_1.Product("123-45", "Random New Product", 1.00);
productSvc.addProduct(newProd);
productSvc.listProducts();
//remove
console.log("removing newest product");
code = "123-45";
productSvc.removeByCode(code);
productSvc.listProducts();
