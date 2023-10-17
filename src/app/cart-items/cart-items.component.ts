import { Component,EventEmitter,Input,Output } from '@angular/core';

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
}
quantity: number
}




@Component({
  selector: 'app-cart-items',
  templateUrl: './cart-items.component.html',
  styleUrls: ['./cart-items.component.css']
})
export class CartItemsComponent {
@Input() item: Product | undefined;
@Output() removeFromCart: EventEmitter<number> =new EventEmitter();
@Output() AddToCart: EventEmitter<number> =new EventEmitter();

removeItem(ISBN:number){
this.removeFromCart.emit(ISBN);
}
addItem(ISBN:number)
{
this.AddToCart.emit(ISBN);
}

}