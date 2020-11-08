import React, { Component } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/swiper.less';
// import 'swiper/dist/css/swiper.min.css'
import "./style.less";
export class SecondPage extends Component {
  render() {
    return (
      <div className="secondpage">
        {/* 照片轮播图 */}
        <div
          className="picbanner"
          style={{ width: "100%", height: "150px" }}
        >
      <Swiper
      spaceBetween={50}
      slidesPerView={1}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
      // autoplay={true}
    >
      <SwiperSlide>Slide 1</SwiperSlide>
      <SwiperSlide>Slide 2</SwiperSlide>
      <SwiperSlide>Slide 3</SwiperSlide>
      <SwiperSlide>Slide 4</SwiperSlide>
      
    </Swiper>
        </div>
      </div>
    );
  }
}

export default SecondPage;
