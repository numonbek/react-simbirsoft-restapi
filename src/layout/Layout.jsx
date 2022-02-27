import React from 'react';
import { Outlet } from 'react-router-dom';
import { Navbar } from 'components';
import './Layout.module.scss';

const Layout = ({ navRef }) => {
  return (
    <React.Fragment>
      <Navbar navRef={navRef} />
      <main className="layout-main container">
        <Outlet />
      </main>
    </React.Fragment>
  );
};

export { Layout };
