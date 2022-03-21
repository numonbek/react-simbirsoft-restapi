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

    React.useEffect(() => {
      document.body.addEventListener('click', outsideClick);
    }, []);

    const outsideClick = (e) => {
      if (!e.path.includes(inputRef.current)) {
        setActive(false);
      }
    };

    function setInpValues(target) {
      setValue(target.value);
      setNameInp(target.name);
      location.setObjName(nameInp, value);
      console.log(location.Obj);
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
    console.log(data);

    const search = (data, inpValue) => {
      return setArray(
        data.filter(
          (inp) =>
            inp.name.toLowerCase().indexOf(inpValue) > -1 ||
            inp.address.toLowerCase().indexOf(inpValue) > -1,
        ),
      );
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
            name={name || 'city'}
            value={value}
            onChange={(e) => (
              setInpValues(e.target),
              !e.target.value && setActive(true),
              search(data, e.target.value)
            )}
            placeholder={placeholder || 'Начните вводить ...'}
            className={clxObj.inputClasses}
            onFocus={(e) => (!!value ? setActive(false) : setActive(true))}
          />
          {!!data && active && (
            <ul className={clx.lists}>
              {array.length <= 0 ? (
                <li className={clx.list}>Вашем городе не обслуживаем</li>
              ) : (
                array.map((el, i) => (
                  <li
                    key={uuidv4()}
                    className={clx.list}
                    onClick={() => (setValue(el.name), setActive(true))}>
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
