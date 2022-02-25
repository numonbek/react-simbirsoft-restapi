import React from 'react';
import './Button.module.scss';
import cn from 'classnames';

const Button = ({ classes, width, height, ...props }) => {
  return (
    <React.Fragment>
      <button style={{ maxWidth: width, minHeight: height }} className={cn('btn', classes)}>
        {props.children}
      </button>
    </React.Fragment>
  );
};

export { Button };
