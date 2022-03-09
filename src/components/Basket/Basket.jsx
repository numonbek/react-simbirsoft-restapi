import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../Button/Button.jsx';
import cn from 'classnames';
import clx from './Basket.module.scss';

const Basket = () => {
  return (
    <div className={clx.basket}>
      <div className={clx.title}>Ваш заказ:</div>
      <ul className={clx.body}>
        <li className={clx.info}>
          <div className={clx.type}>Пункт выдачи</div>
          <div className={clx.dotted}></div>
          <div className={clx.select}>Ульяновск, Нариманова 42</div>
        </li>
      </ul>
      <div className={clx.total}>Цена: от 8 000 до 12 000 ₽</div>
      <Link to={'/'} className={clx.btn}>
        <Button>Выбрать модель</Button>
      </Link>
    </div>
  );
};

export { Basket };
