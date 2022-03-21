import Basket from './basket/Basket';
import Additiona from './order/Additiona';
import Loaction from './order/Location';
import ModelCar from './order/ModelCar';
import Total from './order/Total';

export const store = {
  basket: new Basket(),
  location: new Loaction(),
  additionally: new Additiona(),
  carModel: new ModelCar(),
  total: new Total(),
};
