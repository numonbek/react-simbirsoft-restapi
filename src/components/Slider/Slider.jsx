import React from 'react';
import { Navigation, Pagination, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Button, NextButton, PrevButton } from 'components';
import { Link } from 'react-router-dom';
import { slideData } from '../../data/data';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const Slider = () => {
  return (
    <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, A11y]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      pagination={{
        bulletClass: 'swiper-pagination-bullet',
        bulletActiveClass: 'swiper-pagination-bullet-active',
        clickable: true,
      }}
      navigation={{
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
        disabledClass: 'disable',
      }}
      // scrollbar={{ draggable: true }}
      // onSwiper={(swiper) => console.log(swiper)}
      // onSlideChange={() => console.log('slide change')}
    >
      {slideData.map((item, index) => (
        <SwiperSlide key={`${item}__${index}`}>
          <div className="slide-services">
            <img src={item.img} className="slide-services__bg" />
            <div className="slide-fade"></div>
            <div className="slide-services__container">
              <div className="slide-services__block">
                <div className="title">
                  <h3>{item.title}</h3>
                </div>
                <div className="description">{item.description}</div>
              </div>
              <Link to={`/react-simbirsoft-restapi/${item.path}`} className="details">
                <Button classes={['btn--wm', `btn--${item.path}`]}>Подробнее</Button>
              </Link>
            </div>
          </div>
        </SwiperSlide>
      ))}
      <PrevButton />
      <NextButton />
    </Swiper>
  );
};

export { Slider };
