import {Product} from "../model/product.class";

export class ProductService {
    products: Product[] = [];

    initializeList() {
        let p1: Product = new Product("108-0P", "Hi def TV", 899.99);
        let p2: Product = new Product("L33-75", "Gaming Computer", 1499.99);
        let p3: Product = new Product("T04-5T", "Bread warming device", 79.99);
        let p4: Product = new Product("B4L-L5", "Razor - Handheld", 19.99);
        let p5: Product = new Product("W33-D5", "Glass-Blown Bowl", 99.99);

        this.products = [p1, p2, p3, p4, p5];
        
    }

    listProducts() {
        this.products.forEach(p => {
            console.log(p.about());
            
        });
    }

    getProductByCode(code: string) {
        let product: Product = new Product("na", "na", 0);
        this.products.forEach(p => {
            if (p.code == code) {
                product = p;
            }
        });

            if (product.code == "na") {
                console.log("That product code doesn't exist");
            } else {
                console.log("The product with code: "+product.code+" is "+product.about());
            };
    }

    addProduct(newProduct: Product) {
        this.products.push(newProduct);
    }

    removeByCode(code: string) {
        this.products.forEach(p => {
            if (p.code == code) {
                let idx: number = this.products.indexOf(p);
                this.products.splice(idx,1);
            }
        });
    }
}