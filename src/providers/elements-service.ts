import { Element } from '../model/element';

export class ElementsService {

  constructor() {}

  getElements(): Array<Element> {
    
    let elements: Array<Element> = new Array<Element>();
    let element1: Element = new Element('Pelota', 'football', 12.67);
    elements.push(element1);

    let element2: Element = new Element('Pelota', 'football', 16.45);
    elements.push(element2);

    let element3: Element = new Element('Pelota', 'football', 21.90); 
    elements.push(element3);

    return elements;    
  }

}
