import { makeAutoObservable } from 'mobx';

class ReducerLocation {
  state = {
    city: '',
    pointIssue: '',
  };
  count = 1;
  constructor() {
    makeAutoObservable(this);
  }

  setInpValues = (name, value) => {
    this.state = { ...this.state, [name]: value };
  };

  dec = () => {
    this.count = this.count + 1;
  };

  get getCount() {
    return this.count + 1;
  }
}
export const reducerLocation = new ReducerLocation();
