import { Element } from './element';

export class Cart {
    public id: string;
    public elements: Array<Element>;

    constructor(){
        this.id = new Date().toString();
        this.elements = new Array<Element>();
    }

    
}