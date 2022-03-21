const DEFAULT_LOCATION = {
  lat: 51.507351,
  lng: -0.127696,
};

export const getBrowserLocation = () => {
  return new Promise((resolve, reject) => {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(
        (pos) => {
          const { latitude: lat, longitude: lng } = pos.coords;
          resolve({ lat, lng });
        },
        () => {
          reject(DEFAULT_LOCATION);
        },
      );
    } else {
      reject(DEFAULT_LOCATION);
    }
  });
};
