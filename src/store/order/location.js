import axios from 'axios';
import { $host } from 'http';
import { makeAutoObservable } from 'mobx';

export default class Loaction {
  _city = [];
  _point = [];
  _pointCoords = [];
  _cityCoords = {};

  Obj = {
    city: '',
    point: '',
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
    if (name && value) {
      this.Obj = { ...this.Obj, [name]: value };
      this.getGeocoding();
    }
  }

  filterCity() {
    return this._city.filter((inp) => inp.name.toLowerCase().indexOf(this.Obj.city) > -1);
  }

  filterPoint() {
    return this._point.filter(
      (inp) =>
        inp.name.toLowerCase().indexOf(this.Obj.city) > -1 ||
        inp.address.toLowerCase().indexOf(this.Obj.point) > -1,
    );
  }

  getGeocoding() {
    this._point.map((el, i) => {
      if (el?.cityId?.name == this.Obj.city) {
        const address = el.address.split(' ').join('+');
        this.fetchMarkers(address, el.name, el.cityId.name);
      }
    });
  }

  *fetchCity() {
    const cityData = yield $host.get(`db/city`);
    this._city = [...cityData.data.data];
  }

  *fetchPoint() {
    const pointData = yield $host.get(`db/point`);
    this._point = [...pointData.data.data];
  }

  *fetchMarkerCity(city) {
    const marker = yield axios.get(
      `https://maps.googleapis.com/maps/api/geocode/json?address=${city}&key=${process.env.REACT_APP_API_KEY_GOOGLE_MAP}`,
    );
    this._cityCoords = marker.data.results[0].geometry.location;
    console.log(marker.data.results[0].geometry.location);
  }

  *fetchMarkers(address, place, city) {
    const markers = yield axios.get(
      `https://maps.googleapis.com/maps/api/geocode/json?address=${address},${place},${city}&key=${process.env.REACT_APP_API_KEY_GOOGLE_MAP}`,
    );
    this._pointCoords = [];
    this._pointCoords.push(markers.data.results[0].geometry.location);
  }

  get cityData() {
    return this._city;
  }
  get pointData() {
    return this._point;
  }
  get dataPointCoords() {
    return this._pointCoords;
  }
}
