import React from 'react';
import cn from 'classnames';
import { Close } from 'assets/svg/icon';
import clx from './CustomInput.module.scss';
import { v4 as uuidv4 } from 'uuid';
import { observer } from 'mobx-react';
import { useStore } from 'hooks/useStore';

const CustomInput = observer(
  ({
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
    data,
  }) => {
    const [value, setValue] = React.useState('');
    const [nameInp, setNameInp] = React.useState('');
    const [active, setActive] = React.useState(false);
    const [array, setArray] = React.useState([]);
    const inputRef = React.useRef(null);
    const { location } = useStore();
    // console.log(data);
    React.useEffect(() => {
      document.body.addEventListener('click', outsideClick);
    }, []);

    React.useEffect(() => {
      location.setObjName(nameInp, value);
      location.getGeocoding();
    }, [value]);

    const outsideClick = (e) => {
      if (!e.path.includes(inputRef.current)) {
        setActive(false);
      }
    };

    function setInpValues(target) {
      setValue(target.value);
      setNameInp(target.name);
      !target.value && setActive(true);
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
          ref={inputRef}
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
            <span className={clxObj.closeClasses} onClick={(e) => (setValue(''), setActive(false))}>
              <Close />
            </span>
          ) : null}
          <input
            type={type || 'text'}
            name={name || ''}
            value={value}
            onChange={(e) => setInpValues(e.target)}
            placeholder={placeholder || 'Начните вводить ...'}
            className={clxObj.inputClasses}
            onFocus={(e) => (
              !!value ? setActive(false) : setActive(true), setNameInp(e.target.name)
            )}
          />
          {!!data && active && (
            <ul className={clx.lists}>
              {data.length <= 0 ? (
                <li className={clx.list}>Вашем городе не обслуживаем</li>
              ) : (
                data.map((el, i) => (
                  <li
                    key={uuidv4()}
                    className={clx.list}
                    onClick={() => (
                      setValue(`${el.name}${el.address ? ' ' + el.address : ''}`), setActive(true)
                    )}>
                    <span className={clx.listsItem}>{el?.name}</span>, &nbsp;
                    <span>{el?.address}</span>
                  </li>
                ))
              )}
            </ul>
          )}
        </label>
      </React.Fragment>
    );
  },
);

export { CustomInput };
