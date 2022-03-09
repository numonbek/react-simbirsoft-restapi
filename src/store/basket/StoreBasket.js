import { makeAutoObservable } from 'mobx';

class Basket {
  constructor() {
    makeAutoObservable(this);
  }
}
export const StoreBasket = new Basket();
