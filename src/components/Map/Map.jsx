import React, { useCallback, useMemo, useState } from 'react';
import {
  Circle,
  GoogleMap,
  Marker,
  useJsApiLoader,
  MarkerClusterer,
  DirectionsRenderer,
} from '@react-google-maps/api';
import { API_KEY_GOOGLE_MAP } from 'config';
const containerStyle = {
  width: '100%',
  height: '100%',
};

const Map = ({ center }) => {
  const [directions, setDirections] = useState(null);
  const mapRef = React.useRef(undefined);
  console.log(center);
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: API_KEY_GOOGLE_MAP,
  });

  const onLoad = useCallback((map) => (mapRef.current = map), []);

  const houses = useMemo(() => center && generateHouses(center), [center]);

  const onUnmount = React.useCallback(function callback(map) {
    mapRef.current = undefined;
  }, []);

  const options = useMemo(
    () => ({
      mapId: 'f8a81b6893f7f776',
      disableDefaultUI: true,
      clickableIcons: false,
    }),
    [],
  );

  const fetchDirections = (house) => {
    if (!center) return;

    const service = new google.maps.DirectionsService();
    console.log(service);
    service.route(
      {
        origin: house,
        destination: center,
        travelMode: google.maps.TravelMode.DRIVING,
      },
      (result, status) => {
        console.log(result);
        if (status === 'OK' && result) {
          setDirections(result);
        }
      },
    );
  };

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={10}
      onLoad={onLoad}
      onUnmount={onUnmount}
      options={options}>
      {/* Child components, such as markers, info windows, etc. */}

      {directions && (
        <DirectionsRenderer
          directions={directions}
          options={{
            polylineOptions: {
              zIndex: 50,
              strokeColor: '#1976D2',
              strokeWeight: 5,
            },
          }}
        />
      )}

      <Marker position={center} />

      {center && (
        <MarkerClusterer>
          {(clusterer) =>
            houses.map((house) => (
              <Marker
                key={house.lat}
                position={house}
                clusterer={clusterer}
                onClick={() => {
                  fetchDirections(house);
                }}
              />
            ))
          }
        </MarkerClusterer>
      )}

      <Circle center={center} radius={1000} options={closeOptions} />
      <Circle center={center} radius={5000} options={middleOptions} />
      <Circle center={center} radius={10000} options={farOptions} />
      {}
    </GoogleMap>
  ) : (
    <></>
  );
};

const defaultOptions = {
  strokeOpacity: 0.5,
  strokeWeight: 2,
  clickable: false,
  draggable: false,
  editable: false,
  visible: true,
};
const closeOptions = {
  ...defaultOptions,
  zIndex: 3,
  fillOpacity: 0.05,
  strokeColor: '#8BC34A',
  fillColor: '#8BC34A',
};
const middleOptions = {
  ...defaultOptions,
  zIndex: 2,
  fillOpacity: 0.05,
  strokeColor: '#FBC02D',
  fillColor: '#FBC02D',
};
const farOptions = {
  ...defaultOptions,
  zIndex: 1,
  fillOpacity: 0.05,
  strokeColor: '#FF5252',
  fillColor: '#FF5252',
};

const generateHouses = (position) => {
  const _houses = [];
  for (let i = 0; i < 100; i++) {
    const direction = Math.random() < 0.5 ? -2 : 2;
    _houses.push({
      lat: position.lat + Math.random() / direction,
      lng: position.lng + Math.random() / direction,
    });
  }
  return _houses;
};

export { Map };
