// import { Button } from 'components';
import { Layout } from 'layout';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Business, Home, Insurance, Parking, Services } from 'routes';
import './App.css';

function App() {
  return (
    <div className="App">
      {/* <Button>sdfsdfsdfsd</Button> */}
      <Routes>
        <Route path="/react-simbirsoft-restapi/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/react-simbirsoft-restapi/parking" element={<Parking />} />
          <Route path="/react-simbirsoft-restapi/insurance" element={<Insurance />} />
          <Route path="/react-simbirsoft-restapi/business" element={<Business />} />
          <Route path="/react-simbirsoft-restapi/service" element={<Services />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
