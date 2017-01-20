import { Element } from './element';

export class Cart {
    public id: string;
    public elements: Array<Element>;
    public total: number;

    constructor(){
        this.id = new Date().toString();
        this.elements = new Array<Element>();
        this.total = 0;
    }

    
}