import { makeAutoObservable } from 'mobx';

export default class ModelCar {
  flag = false;
  constructor() {
    makeAutoObservable(this);
  }

  setCity(city) {
    this._city = city;
  }

  setPoint(point) {
    this._point = point;
  }

  get cityName() {}
  get pointName() {}
}
