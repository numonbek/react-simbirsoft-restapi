import React from 'react';

const Footer = ({ companyName, telNumber }) => {
  return (
    <React.Fragment>
      <footer className="footer">
        <div className="corp">
          <h6>{companyName || '© 2016-2019 «Need for drive»'}</h6>
        </div>
        <div className="callback">
          <h6> {telNumber || '8 (495) 234-22-44'}</h6>
        </div>
      </footer>
    </React.Fragment>
  );
};

export { Footer };
