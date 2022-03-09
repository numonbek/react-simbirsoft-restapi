import React from 'react';
import cn from 'classnames';
import { Close } from 'assets/svg/icon';
import clx from './CustomInput.module.scss';

const CustomInput = ({
  placeholder,
  type,
  name,
  labelClx,
  deleteClx,
  svgClx,
  inputClx,
  maxWidth,
  minWidth,
  maxHeight,
  minHeight,
  width,
  height,
  getInpValues,
}) => {
  const [value, setValue] = React.useState('');
  const [nameInp, setNameInp] = React.useState('');

  function setInpValues(target) {
    setValue(target.value);
    setNameInp(target.name);
    // getInpValues(target.name, target.value)
  }

  const clxObj = {
    labelClasses: cn(
      {
        [clx.label]: true,
      },
      labelClx,
    ),
    deleteClasses: cn(
      {
        [clx.delete]: true,
      },
      deleteClx,
    ),
    closeClasses: cn(
      {
        [clx.close]: true,
      },
      svgClx,
    ),
    inputClasses: cn(
      {
        [clx.input]: true,
      },
      inputClx,
    ),
  };

  return (
    <React.Fragment>
      <label
        className={clxObj.labelClasses}
        style={{
          width: width,
          height: height,
          maxWidth: maxWidth,
          minWidth: minWidth,
          maxHeight: maxHeight,
          minHeight: minHeight,
        }}>
        {value !== '' ? (
          <span className={clxObj.closeClasses} onClick={(e) => setValue('')}>
            <Close />
          </span>
        ) : null}
        <input
          type={type || 'text'}
          name={name || 'city'}
          value={value}
          onChange={(e) => setInpValues(e.target)}
          placeholder={placeholder || 'Начните вводить ...'}
          className={clxObj.inputClasses}
        />
      </label>
    </React.Fragment>
  );
};

export { CustomInput };
