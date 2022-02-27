import React from 'react';
import { Map } from 'assets/svg/icon';
import { Link } from 'react-router-dom';
import './Header.module.scss';

const Header = () => {
  return (
    <React.Fragment>
      <header className="header">
        <Link to="/react-simbirsoft-restapi/" className="logo">
          <h4 className="header-title">Need for drive</h4>
        </Link>
        <div className="location">
          <div className="location-icon">
            <Map />
          </div>
          <div className="location-city">Ульяновск</div>
        </div>
      </header>
    </React.Fragment>
  );
};

export { Header };
