import React from 'react';
import { NavLink, useParams, useNavigate, useMatch } from 'react-router-dom';
import cn from 'classnames';
import clx from './NavigationPages.module.scss';
import { v4 as uuidv4 } from 'uuid';

const NavigationPages = ({ pages, classes, setNavIndex, navIndex }) => {
  const nav = cn({
    classes,
  });
  const navList = cn({
    classes,
  });
  const navLink = cn({
    [clx.link]: true,
  });
  function navs(i, navIndex) {
    if (i > navIndex) {
      return { color: 'gray' };
    } else if (i < navIndex) {
      return { color: 'black' };
    } else {
      return { color: 'green' };
    }
  }
  return (
    <React.Fragment>
      <ul className={clx.nav}>
        {pages.map((link, i) => (
          <li key={uuidv4()} className={clx.list} style={navs(i, navIndex)}>
            <NavLink to={link.page} className={navLink} onClick={(e) => setNavIndex(i)}>
              {link.name}
            </NavLink>
          </li>
        ))}
      </ul>
    </React.Fragment>
  );
};

export { NavigationPages };
