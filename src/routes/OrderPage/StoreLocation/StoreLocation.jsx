import React from 'react';
import { CustomInput, Map } from 'components';
import cn from 'classnames';
import clx from './StoreLocation.module.scss';
const center = {
  lat: -3.745,
  lng: -38.523,
};
const StoreLocation = () => {
  return (
    <div className={clx.location}>
      <div className={clx.header}>
        <div className={cn(clx.inputBlock, 'color--black')}>
          <div className={clx.text}>Город</div>
          <div className={clx.input}>
            <CustomInput
              maxWidth="224px"
              placeholder="Начните вводить город ..."
              name="city"
              // setInpValues={dsd}
            />
          </div>
        </div>
        <div className={cn(clx.inputBlock, 'color--black')}>
          <div className={clx.text}>Пункт выдачи</div>
          <div className={clx.input}>
            <CustomInput
              maxWidth="224px"
              placeholder="Начните вводить пункт ..."
              name="location"
              // setInpValues={dsd}
            />
          </div>
        </div>
      </div>
      <div className={clx.body}>
        <div className={cn(clx.pointIssue, 'color--black')}>
          <div className={clx.text}>Выбрать на карте:</div>
          <div className={clx.map}>
            <Map center={center} />
          </div>
        </div>
      </div>
      {/* <h1>StoreLocation</h1> */}
    </div>
  );
};

export { StoreLocation };
