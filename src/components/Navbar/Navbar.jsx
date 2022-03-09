import React from 'react';
import { Facebook, Instagram, Telegram } from 'assets/svg/icon';
import { NavLink } from 'react-router-dom';
import './Navbar.module.scss';

const Navbar = ({ navRef }) => {
  const [burger, setBurger] = React.useState(false);

  const setActive = ({ isActive }) => (isActive ? 'nav-link nav-link-active' : 'nav-link');

  function handleBurger() {
    setBurger(!burger);
    navRef.current.classList.toggle('navbar-active');
  }

  return (
    <React.Fragment>
      <div className="navbar-wrapper">
        <div className="fade" onClick={handleBurger}></div>
        <div className="burger" onClick={handleBurger}>
          <div className="burger-block">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
        <nav className="navbar">
          <div className="navbar-block">
            <ul className="nav">
              <li className="nav-list">
                <NavLink to={`/`} className={setActive} onClick={handleBurger}>
                  <h3>ГЛАВНАЯ</h3>
                </NavLink>
              </li>
              <li className="nav-list">
                <NavLink to={`/parking`} className={setActive} onClick={handleBurger}>
                  <h3>ПАРКОВКА</h3>
                </NavLink>
              </li>
              <li className="nav-list">
                <NavLink to={`/insurance`} className={setActive} onClick={handleBurger}>
                  <h3>СТРАХОВКА</h3>
                </NavLink>
              </li>
              <li className="nav-list">
                <NavLink to={`/business`} className={setActive} onClick={handleBurger}>
                  <h3>БЕНЗИН</h3>
                </NavLink>
              </li>
              <li className="nav-list">
                <NavLink to={`/service`} className={setActive} onClick={handleBurger}>
                  <h3>ОБСЛУЖИВАНИЕ</h3>
                </NavLink>
              </li>
            </ul>
            <div className="socials">
              <div className="telegram">
                <Telegram />
              </div>
              <div className="facebook">
                <Facebook />
              </div>
              <div className="instagram">
                <Instagram />
              </div>
            </div>
          </div>
          <div className="language">
            <h6>Eng</h6>
          </div>
        </nav>
      </div>
    </React.Fragment>
  );
};

export { Navbar };
