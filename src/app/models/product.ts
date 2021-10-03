import { Category } from "./category";

export class Product {

    constructor(
        private id? :Number,
        private name? : String,
        private description? : String,
        private imageUrl? : String,
        private price? : Number,
        private category? : Category,
       

    ){

    }
}
