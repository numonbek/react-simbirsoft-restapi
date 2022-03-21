import React from 'react';
import { CarImg01 } from 'assets/img/images';
import clx from './CardCars.module.scss';

const CardCars = () => {
  return (
    <React.Fragment>
      <label className={clx.card}>
        <input type="checkbox" name="car" className={clx.select} />
        <span className={clx.car}>
          <span className={clx.header}>
            <span className={clx.name}>ELANTRA</span>
            <span className={clx.price}>12 000 - 25 000 ₽</span>
          </span>
          <span className={clx.body}>
            <img src={CarImg01} alt="car name" className={clx.img} />
          </span>
        </span>
      </label>
    </React.Fragment>
  );
};

export { CardCars };
