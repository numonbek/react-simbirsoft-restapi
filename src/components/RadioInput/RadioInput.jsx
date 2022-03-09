import React from 'react';
import clx from './RadioInput.module.scss';

const RadioInput = ({ nameInput, text }) => {
  const [name, setName] = React.useState('name');
  return (
    <div className={clx.radio}>
      <label className={clx.label}>
        <input type="radio" name={name} className={clx.input} />
        <span className={clx.customBlock}>
          <span className={clx.customRadio}></span>
          <span className={clx.text}>{text || 'Все модели'}</span>
        </span>
      </label>
    </div>
  );
};

export { RadioInput };
