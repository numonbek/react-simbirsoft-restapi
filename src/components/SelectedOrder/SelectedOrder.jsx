import React from 'react';
import { CarImg01 } from 'assets/img/images';
import clx from './SelectedOrder.module.scss';

const SelectedOrder = () => {
  return (
    <React.Fragment>
      <div className={clx.car}>
        <div className={clx.info}>
          <div className={clx.carName}>Hyndai, i30 N</div>
          <div className={clx.numberCar}>K 761 HA 73</div>
          <div className={clx.oilStatus}>
            <span className={clx.strong}>Топливо</span> 100%
          </div>
          <div className={clx.dateOfStart}>
            <span className={clx.strong}>Доступна с</span> 12.06.2019 12:00
          </div>
        </div>
        <div className={clx.photo}>
          <img src={CarImg01} alt="selected car" className={clx.img} />
        </div>
      </div>
    </React.Fragment>
  );
};

export { SelectedOrder };
