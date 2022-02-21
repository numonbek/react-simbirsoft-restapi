import React from 'react';
import { Outlet } from 'react-router-dom';
import { Navbar } from 'components';
import './Layout.module.scss';

const Layout = (props) => {
  return (
    <React.Fragment>
      <Navbar />
      <main className="layout-main container">
        <Outlet />
      </main>
    </React.Fragment>
  );
};

export { Layout };
