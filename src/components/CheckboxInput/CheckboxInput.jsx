import React from 'react';
import { Checked } from 'assets/svg/icon';

import clx from './CheckboxInput.module.scss';

const CheckboxInput = ({ text }) => {
  const [name, setName] = React.useState('');
  return (
    <div className={clx.checkbox}>
      <label className={clx.label}>
        <input type="checkbox" name={name} className={clx.input} />
        <span className={clx.customBlock}>
          <span className={clx.customCheckbox}>
            <img src={Checked} className={clx.img} alt="Checked" />
          </span>
          <span className={clx.text}>{text || 'Полный бак, 500р'}</span>
        </span>
      </label>
    </div>
  );
};
export { CheckboxInput };
