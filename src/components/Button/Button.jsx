import React from 'react';
import './Button.module.scss';
import cn from 'classnames';

const Button = ({ classes, width, height, onClick, ...props }) => {
  return (
    <React.Fragment>
      <button
        style={{ maxWidth: width, minHeight: height }}
        className={cn('btn', classes)}
        onClick={() => console.log('click')}
        disabled={props.disabled}>
        {props.children}
      </button>
    </React.Fragment>
  );
};

export { Button };
