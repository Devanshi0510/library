import { Component,EventEmitter,Input, Output } from '@angular/core';

interface Product{
  ISBN: number,
  title: string,
  author: string,
  summary:string,
  image: string,
  price: {
    currency: string,
    value: number,
    displayValue:string
}}


@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
@Input() product: Product | undefined;
@Output() addItem: EventEmitter<any> =new EventEmitter();

addtoCart(product:Product)
{
  this.addItem.emit(product);
}


}