export class Product {
    code: string;
    description: string;
    price: number;

    constructor(c: string, d: string,p:number) {
        this.code = c;
        this.description = d;
        this.price = p;
    }

    about(): string {
        return "Product: code = "+this.code+
                ", description = "+this.description+
                ", price = "+this.price;
    }
}