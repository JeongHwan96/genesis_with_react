import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination, Autoplay } from "swiper";
import "swiper/css"; //basic
import "swiper/css/navigation";
import "swiper/css/pagination";
const Section3 = () => {
  return (
    <Swiper
      spaceBetween={1}
      slidesPerView={1}
      scrollbar={{ draggable: true }}
      pagination={{ clickable: true }}
      loop={true}
      autoplay={{
        delay: 6000,
        disableOnInteraction: true,
      }}
    >
      <SwiperSlide>
        <div>
          <img src="img/swiper2_1.jpg" alt="" />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div>
          <img src="img/swiper2_2.jpg" alt="" />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div>
          <img src="img/swiper2_3.jpg" alt="" />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div>
          <img src="img/swiper2_4.jpg" alt="" />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div>
          <img src="img/swiper2_5.jpg" alt="" />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div>
          <img src="img/swiper2_6.jpg" alt="" />
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default Section3;
