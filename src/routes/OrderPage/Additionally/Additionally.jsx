import React from 'react';
import { CheckboxInput, CustomInput, RadioInput } from 'components';
import cn from 'classnames';
import clx from './Additionally.module.scss';

const Additionally = () => {
  return (
    <React.Fragment>
      <div className={clx.additional}>
        <div className={clx.colors}>
          <div className={clx.text}>Цвет</div>
          <div className={clx.colorsBlock}>
            <div className={clx.type}>
              <RadioInput text="Любой" />
            </div>
            <div className={clx.type}>
              <RadioInput text="Красный" />
            </div>
            <div className={clx.type}>
              <RadioInput text="Голубой" />
            </div>
          </div>
        </div>
        <div className={clx.dateRent}>
          <div className={clx.text}>Дата аренды</div>
          <div className={clx.dateInputs}>
            <div className={cn(clx.start, 'color--black')}>
              <div className={clx.text}>C</div>
              <div className={clx.input}>
                <CustomInput maxWidth="224px" placeholder="Начните вводить город ..." name="city" />
              </div>
            </div>
            <div className={cn(clx.end, clx.start, 'color--black')}>
              <div className={clx.text}>По</div>
              <div className={clx.input}>
                <CustomInput maxWidth="224px" placeholder="Начните вводить город ..." name="city" />
              </div>
            </div>
          </div>
        </div>
        <div className={clx.tariffs}>
          <div className={clx.text}>Тариф</div>
          <div className={clx.tariffBlock}>
            <RadioInput text="Поминутно, 7₽/мин" />
            <RadioInput text="На сутки, 1999 ₽/сутки" />
          </div>
        </div>
        <div className={clx.services}>
          <div className={clx.text}>Доп услуги</div>
          <div className={clx.servicesBlock}>
            <CheckboxInput text="Полный бак, 500р" />
            <CheckboxInput text="Детское кресло, 200р" />
            <CheckboxInput text="Правый руль, 1600р" />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export { Additionally };
