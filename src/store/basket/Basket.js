import { makeAutoObservable } from 'mobx';

export default class Basket {
  hh = 0;

  constructor() {
    makeAutoObservable(this);
  }

  inc() {
    this.hh++;
  }
}
