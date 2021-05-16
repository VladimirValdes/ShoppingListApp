
export class ShoppingList {
    name: string;
    finishAt: Date;
    complete: boolean;
    products: [];

    constructor( name: string ) {
       this.name = name;
       this.finishAt = new Date();
       this.complete = false;
       this.products = [];
    }
}
