import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { Swiper } from "swiper/react";
import { SwiperSlide } from "swiper/react";

export default function BasicSelect() {
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <>
      <div className="section2_wrap">
        <div className="our_models">OUR MODELS</div>
        <div className="our_models_desc">
          역동적이면서도 우아한 디자인과 최첨단 기술을 탑재한 제네시스 브랜드의
          라인업을 살펴보세요
        </div>
      </div>
      <div className="car_container">
        <Box
          style={{ backgroundColor: "black", margin: "4% 25.2%" }}
          sx={{ maxWidth: 400 }}
        >
          <FormControl style={{ backgroundColor: "black" }} fullWidth>
            <InputLabel
              style={{ color: "white" }}
              id="demo-simple-select-label"
            >
              Model
            </InputLabel>
            <Select
              labelId="demo-simple-select-label"
              style={{ color: "white", borderBottom: "1px solid white" }}
              id="demo-simple-select"
              value={age}
              onChange={handleChange}
            >
              <MenuItem style={{ backgroundColor: "black" }} value={10}>
                ALL
              </MenuItem>
              <MenuItem style={{ backgroundColor: "black" }} value={20}>
                SEDAN
              </MenuItem>
              <MenuItem style={{ backgroundColor: "black" }} value={30}>
                SUV
              </MenuItem>
            </Select>
          </FormControl>
        </Box>
        <div className="car_img_wrap">
          <Swiper
            spaceBetween={1}
            slidesPerView={3}
            scrollbar={{ draggable: true }}
            pagination={{ clickable: true }}
            loop={true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: true,
            }}
          >
            <SwiperSlide>
              <div className="car_border">
                <div className="g70">
                  <div className="_titile">G70</div>
                  <div className="_sub">SHOOTING BRAKE</div>
                </div>
                <img src="img/g70_shooting.jpg" alt="" />
                <div className="detail">자세히 보기</div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="car_border">
                <div className="g70">
                  <div className="_titile">G70</div>
                  <div className="_sub">SHOOTING BRAKE</div>
                </div>
                <img src="img/g70.jpg" alt="" />
                <div className="detail">자세히 보기</div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="car_border">
                <div className="g70">
                  <div className="_titile">G70</div>
                  <div className="_sub">SHOOTING BRAKE</div>
                </div>
                <img src="img/g80.jpg" alt="" />
                <div className="detail">자세히 보기</div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="car_border">
                <div className="g70">
                  <div className="_titile">G70</div>
                  <div className="_sub">SHOOTING BRAKE</div>
                </div>
                <img src="img/g80_2.jpg" alt="" />
                <div className="detail">자세히 보기</div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="car_border">
                <div className="g70">
                  <div className="_titile">G70</div>
                  <div className="_sub">SHOOTING BRAKE</div>
                </div>
                <img src="img/g90.jpg" alt="" />
                <div className="detail">자세히 보기</div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="car_border">
                <div className="g70">
                  <div className="_titile">G70</div>
                  <div className="_sub">SHOOTING BRAKE</div>
                </div>
                <img src="img/gv60.jpg" alt="" />
                <div className="detail">자세히 보기</div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="car_border">
                <div className="g70">
                  <div className="_titile">G70</div>
                  <div className="_sub">SHOOTING BRAKE</div>
                </div>
                <img src="img/gv70_elect.jpg" alt="" />
                <div className="detail">자세히 보기</div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="car_border">
                <div className="g70">
                  <div className="_titile">G70</div>
                  <div className="_sub">SHOOTING BRAKE</div>
                </div>
                <img src="img/gv70.jpg" alt="" />
                <div className="detail">자세히 보기</div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="car_border">
                <div className="g70">
                  <div className="_titile">G70</div>
                  <div className="_sub">SHOOTING BRAKE</div>
                </div>
                <img src="img/gv80.jpg" alt="" />
                <div className="detail">자세히 보기</div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </>
  );
}
