// import { Button } from 'components';
import { Layout } from 'layout';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import {
  Additionally,
  Business,
  CarModel,
  Home,
  Insurance,
  OrderPage,
  Parking,
  Services,
  StoreLocation,
  TotalBasket,
} from 'routes';
import { observer } from 'mobx-react-lite';
import './App.css';
import { useStore } from 'hooks/useStore';

const App = observer(() => {
  const { location } = useStore();
  const navRef = React.useRef(null);

  return (
    <div className="App" ref={navRef}>
      <button onClick={() => console.log(location.dataObj)}></button>
      <Routes>
        <Route path="/" element={<Layout navRef={navRef} />}>
          <Route index element={<Home />} />
          <Route path="parking" element={<Parking />} />
          <Route path="insurance" element={<Insurance />} />
          <Route path="business" element={<Business />} />
          <Route path="service" element={<Services />} />
          <Route path="order" element={<OrderPage />}>
            <Route index element={<StoreLocation />} />
            <Route path="carModel" index element={<CarModel />} />
            <Route path="carModel/additionally" index element={<Additionally />} />
            <Route path="carModel/additionally/totalbasket" index element={<TotalBasket />} />
          </Route>
        </Route>
      </Routes>
    </div>
  );
});

export default App;
