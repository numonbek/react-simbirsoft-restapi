import React from 'react';
import { CarImg01 } from 'assets/img/images';
import clx from './CardCars.module.scss';

const CardCars = () => {
  return (
    <React.Fragment>
      <label className={clx.card}>
        <input
          type="checkbox"
          name="car"
          onChange={(e) => console.log(e.target)}
          className={clx.select}
        />
        <span className={clx.car}>
          <span className={clx.header}>
            <sapn className={clx.name}>ELANTRA</sapn>
            <sapn className={clx.price}>12 000 - 25 000 ₽</sapn>
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
