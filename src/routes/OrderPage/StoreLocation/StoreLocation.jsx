import React from 'react';
import { CustomInput, Map } from 'components';
import cn from 'classnames';
import clx from './StoreLocation.module.scss';
import { getBrowserLocation } from 'utils/geo';
import { useStore } from 'hooks/useStore';
import { observer } from 'mobx-react';

const StoreLocation = observer(() => {
  const [center, setCenter] = React.useState(null);
  const { basket, location } = useStore();

  React.useEffect(() => {
    getBrowserLocation()
      .then((currentLocation) => {
        setCenter(currentLocation);
      })
      .catch((defaultLocation) => {
        setCenter(getBrowserLocation);
      });

    location.fetchCity();
    location.fetchPoint();
  }, []);

  // console.log(location.cityData);
  // console.log(location.pointData);

  return (
    <div className={clx.location}>
      <div className={clx.header}>
        <div className={cn(clx.inputBlock, 'color--black')}>
          <div className={clx.text}>Город</div>
          <div className={clx.input}>
            <CustomInput
              maxWidth="224px"
              placeholder="Начните вводить город ..."
              name="city"
              data={location.filterCity()}
            />
          </div>
        </div>
        <div className={cn(clx.inputBlock, 'color--black')}>
          <div className={clx.text}>Пункт выдачи</div>
          <div className={clx.input}>
            <CustomInput
              maxWidth="224px"
              placeholder="Начните вводить пункт ..."
              name="point"
              data={location.filterPoint()}
            />
          </div>
        </div>
      </div>
      <div className={clx.body}>
        <div className={cn(clx.pointIssue, 'color--black')}>
          <div className={clx.text}>Выбрать на карте:</div>
          <div className={clx.map}>
            <Map center={center} />
          </div>
        </div>
      </div>
    </div>
  );
});

export { StoreLocation };
