import { $host } from 'http';
import { makeAutoObservable } from 'mobx';

export default class Loaction {
  _city = [];
  _point = [];
  Obj = {
    cityName: '',
    pointName: '',
  };
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

  setObjName(name, value) {
    this.Obj = { ...this.Obj, [name]: value };
  }

  filterCity() {}

  filterPoint() {}

  *fetchCity() {
    const cityData = yield $host.get(`db/city`);
    this._city = [...cityData.data.data];
  }

  *fetchPoint() {
    const pointData = yield $host.get(`db/point`);
    this._point = [...pointData.data.data];
  }

  get cityData() {
    return this._city;
  }
  get pointData() {
    return this._point;
  }
}
