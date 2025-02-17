import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
// import './styles.css';
import { Pagination } from 'swiper/modules';


export default function Home() {


  return (
    <section id='home' className='home'>
      <div className='row'>
        <div className='content'>
          <h3>Upto 75% off</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          </p>
          <button>Show Now</button>
        </div>

        <div className='books-slider'>
          <div className='wrapper'>
          <Swiper
        slidesPerView={1}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        loop={true} 
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
              <SwiperSlide>
                <img src='image/book-image1.jpg' alt='' />
              </SwiperSlide>
              <SwiperSlide>
                <img src='image/habits-of-highly-effective-people.jpg' alt='' />
              </SwiperSlide>
              <SwiperSlide>
                <img src='image/power-of-character-in-leadership.jpg' alt='' />
              </SwiperSlide>
              <SwiperSlide>
                <img src='image/the-mind-of-the-leader.jpg' alt='' />
              </SwiperSlide>
              {/* <SwiperSlide>
                <img src='image/think-and-grow-rich.jpg' alt='' />
              </SwiperSlide>
              <SwiperSlide>
                <img src='image/you-become-what-you-think-about.jpg' alt='' />
              </SwiperSlide> */}
              {/* <img src='image/stand.png' alt='' className='stand' /> */}
            </Swiper>
          </div>
        </div>
      </div>
    </section >
  )
}
