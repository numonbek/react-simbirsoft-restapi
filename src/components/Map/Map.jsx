import React from 'react';
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';
import { API_KEY_GOOGLE_MAP } from 'config';
const containerStyle = {
  width: '100%',
  height: '100%',
};

const Map = ({ center }) => {
  const mapRef = React.useRef(undefined);

  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: API_KEY_GOOGLE_MAP,
  });

  const onLoad = React.useCallback(function callback(map) {
    mapRef.current = map;
  }, []);

  const onUnmount = React.useCallback(function callback(map) {
    mapRef.current = undefined;
  }, []);

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={10}
      onLoad={onLoad}
      onUnmount={onUnmount}>
      {/* Child components, such as markers, info windows, etc. */}
      <></>
    </GoogleMap>
  ) : (
    <></>
  );
};

export { Map };
