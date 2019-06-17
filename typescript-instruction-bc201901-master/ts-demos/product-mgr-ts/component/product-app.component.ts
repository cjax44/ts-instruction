import {Product} from "../model/product.class";
import {ProductService} from "../service/product.service";

let productSvc: ProductService = new ProductService();

//initialize list
productSvc.initializeList();

//display
productSvc.listProducts();

//get by id
let code: string = "108-0P";
productSvc.getProductByCode(code);

//add
console.log("adding a product")
let newProd: Product = new Product("123-45", "Random New Product", 1.00);
productSvc.addProduct(newProd);
productSvc.listProducts();

//remove
console.log("removing newest product");
code = "123-45";
productSvc.removeByCode(code);
productSvc.listProducts();