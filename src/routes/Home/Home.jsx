import React from 'react';
import { Button, Footer, Header, Slider } from 'components';
import './Home.module.scss';

const Home = () => {

  return (
    <div className="home">
      <div className="home-left">
        <div className="home-block">
          <Header />
          <div className="home-title">
            <div className="title">
              <h1 className="color--black">Каршеринг</h1>
              <h1 className="color--green">Need for drive</h1>
            </div>
            <div className="description">
              <p>Поминутная аренда авто твоего города</p>
            </div>
          </div>
          <div className="button">
            <Button classes={['btn--wl']}>Забронировать</Button>
          </div>
          <Footer />
        </div>
      </div>
      <div className="home-right">
        <Slider />
      </div>
    </div>
  );
};

export { Home };
