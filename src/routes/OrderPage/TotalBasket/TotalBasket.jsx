import { SelectedOrder } from 'components';
import React from 'react';

const TotalBasket = () => {
  return (
    <React.Fragment>
      <ul className="orders">
        <li className="order">
          <SelectedOrder />
        </li>
      </ul>
    </React.Fragment>
  );
};

export { TotalBasket };
