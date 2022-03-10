import React from 'react';
import { reducerLocation } from 'store/reducerLocation/reducerLocation';
import { observer } from 'mobx-react-lite';
import { NavLink, Outlet } from 'react-router-dom';
import { Basket, Header, NavigationPages } from 'components';
import { ArrowFill } from 'assets/svg/icon';

const pageDate = [
  {
    name: 'Местоположение',
    page: '/react-simbirsoft-restapi/order',
    active: true,
  },
  {
    name: 'Модель',
    page: '/react-simbirsoft-restapi/carModel',
    active: false,
  },
  {
    name: 'Дополнительно',
    page: '/react-simbirsoft-restapi/carModel/additionally',
    active: false,
  },
  {
    name: 'Итого',
    page: '/react-simbirsoft-restapi/carModel/additionally/totalbasket',
    active: false,
  },
];

const OrderPage = observer(() => {
  const [navIndex, setNavIndex] = React.useState(0);
  const { city, pointIssue } = reducerLocation.state;
  const { dec, getCount, count, setInpValues } = reducerLocation;
  const [close, setClose] = React.useState(false);

  return (
    <div className="order-page font-style">
      <div className="order-page__header order-page-container">
        <Header />
      </div>
      <div className="order-page__navbar">
        <div className="order-page-container">
          <NavigationPages
            pages={pageDate}
            classes={['d']}
            setNavIndex={setNavIndex}
            navIndex={navIndex}
          />
        </div>
      </div>
      <div className="order-page__body order-page-container font-style-theme--s">
        <div className="order-page__main">
          <Outlet />
        </div>
        <div className="order-page__basket">
          <Basket />
        </div>
      </div>
    </div>
  );
});

export { OrderPage };
