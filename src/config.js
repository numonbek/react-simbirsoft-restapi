const API_KEY_GOOGLE_MAP = process.env.REACT_APP_API_KEY_GOOGLE_MAP;

const API_URL = process.env.REACT_APP_API_URL;

const HEADERS = {
  headers: {
    'X-Api-Factory-Application-Id': process.env.REACT_APP_USER_TOKEN,
  },
};
export { API_URL, HEADERS, API_KEY_GOOGLE_MAP };
