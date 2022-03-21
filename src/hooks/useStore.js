import { StoreContext } from 'index';
import { useContext } from 'react';

export const useStore = () => {
  return useContext(StoreContext);
};
