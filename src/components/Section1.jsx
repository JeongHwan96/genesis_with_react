import React from "react";
import { Swiper, SwiperSlide } from "swiper/react"; // basic
import SwiperCore, { Navigation, Pagination, Autoplay } from "swiper";
import "swiper/css"; //basic
import "swiper/css/navigation";
import "swiper/css/pagination";

SwiperCore.use([Navigation, Pagination, Autoplay]);

const Section1 = () => {
  return (
    <section className="section1_wrap">
      <Swiper
        spaceBetween={1}
        slidesPerView={1}
        scrollbar={{ draggable: true }}
        pagination={{ clickable: true }}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: true,
        }}
      >
        <SwiperSlide>
          <div>
            <img src="img/swiper1.jpg" alt="" />
            <div className="left_border"></div>
            <div className="left_border2"></div>
            <div className="detail_price">
              <a href="#">
                <span>더 알아보기 &gt; </span>
              </a>
              <a href="#">
                <span>더 알아보기 &gt; </span>
              </a>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <img src="img/swiper2.jpg" alt="" />
          <div className="left_border"></div>
          <div className="left_border2"></div>
          <div className="detail_price">
            <a href="#">
              <span>더 알아보기 &gt; </span>
            </a>
            <a href="#">
              <span>더 알아보기 &gt; </span>
            </a>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src="img/swiper3.jpg" alt="" />
          <div className="left_border"></div>
          <div className="left_border2"></div>
          <div className="detail_price">
            <a href="#">
              <span>더 알아보기 &gt; </span>
            </a>
            <a href="#">
              <span>더 알아보기 &gt; </span>
            </a>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src="img/swiper4.jpg" alt="" />
          <div className="left_border"></div>
          <div className="left_border2"></div>
          <div className="detail_price">
            <a href="#">
              <span>더 알아보기 &gt; </span>
            </a>
            <a href="#">
              <span>더 알아보기 &gt; </span>
            </a>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <img src="img/swiper5.jpg" alt="" />
          <div className="left_border"></div>
          <div className="left_border2"></div>
          <div className="detail_price">
            <a href="#">
              <span>더 알아보기 &gt; </span>
            </a>
            <a href="#">
              <span>더 알아보기 &gt; </span>
            </a>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src="img/swiper6.jpg" alt="" />
          <div className="left_border"></div>
          <div className="left_border2"></div>
          <div className="detail_price">
            <a href="#">
              <span>더 알아보기 &gt; </span>
            </a>
            <a href="#">
              <span>더 알아보기 &gt; </span>
            </a>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Section1;
