import React from 'react';
import { CardCars, RadioInput } from 'components';
import clx from './CarModel.module.scss';
import { v4 as uuidv4 } from 'uuid';

const CarModel = () => {
  const data = ['Все модели', 'Эконом', 'Премиум'];
  return (
    <React.Fragment>
      <div className={clx.typs}>
        {data.map((el) => (
          <div key={uuidv4()} className={clx.type}>
            <RadioInput text={el} />
          </div>
        ))}
      </div>
      <ul className={clx.cars}>
        <li className={clx.car}>
          <CardCars />
        </li>
        <li className={clx.car}>
          <CardCars />
        </li>
        <li className={clx.car}>
          <CardCars />
        </li>
        <li className={clx.car}>
          <CardCars />
        </li>
        <li className={clx.car}>
          <CardCars />
        </li>
      </ul>
    </React.Fragment>
  );
};

export { CarModel };
