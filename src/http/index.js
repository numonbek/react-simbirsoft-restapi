import axios from 'axios';
import { HEADERS } from 'config';
import { API_URL } from 'config';

const $host = axios.create({
  ...HEADERS,
});

// const $authHost = axios.create({
//   baseURL: 'http://api-factory.simbirsoft1.com/api/',
//   headers: { 'X-Custom-Header': 'foobar' },
// });

// const authInterceptor = (config) => {
//   config.headers.authorization = `Bearer ${localStorage.getItem('token')}`;
//   return config;
// };

// $authHost.interceptors.request.use(authInterceptor);

export { $host };
