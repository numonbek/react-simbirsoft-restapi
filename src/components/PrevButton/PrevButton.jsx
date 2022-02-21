import { PrevArrowIcon } from 'assets/svg/icon';
import React from 'react';

const PrevButton = () => {
  return (
    <React.Fragment>
      <div className="button-prev swiper-button-prev">
        <PrevArrowIcon />
      </div>
    </React.Fragment>
  );
};

export { PrevButton };
