import { Injectable } from '@angular/core';
import { Cart } from '../shared/models/Cart';
import { BehaviorSubject, Observable } from 'rxjs';
import { Food } from '../shared/models/Foods';
import { CartItem } from '../shared/models/CartItem';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private cart: Cart = this.getCartFromLocalStorage()
  private cartSubject: BehaviorSubject<Cart> = new BehaviorSubject(this.cart)

  constructor() { }


  addToCart(food: Food): void{
    let cartItem = this.cart.items.find(item => item.food.id == food.id)

    if(cartItem) return;
    this.cart.items.push(new CartItem(food))
    this.setCartToLocalStorage()
  }



  removeFromCart(foodId: string): void{
    this.cart.items = this.cart.items.filter(item => item.food.id != foodId)
    this.setCartToLocalStorage()
  }



  changeQuantity(foodId: string, quantity: number){
    let cartItem = this.cart.items.find(item => item.food.id === foodId);

    if(!cartItem) return;

    cartItem.quantity = quantity;
    cartItem.price = quantity * cartItem.food.price
    this.setCartToLocalStorage()
  }



  clearCart(){
    this.cart = new Cart()
    this.setCartToLocalStorage()
  }



  getCartObservable(): Observable<Cart>{
    return this.cartSubject.asObservable()
  }



  private setCartToLocalStorage():void{
    this.cart.totalPrice = this.cart.items.reduce((acc, currentItem) => acc + currentItem.price, 0)
    this.cart.totalCount = this.cart.items.reduce((acc, currentCount) => acc + currentCount.quantity, 0)

    const cartJson = JSON.stringify(this.cart)
    localStorage.setItem('Cart', cartJson)
    this.cartSubject.next(this.cart)
  }



  private getCartFromLocalStorage(): Cart{
    const cartJSON = localStorage.getItem('Cart')
    return cartJSON ? JSON.parse(cartJSON) : new Cart()
  }




}
