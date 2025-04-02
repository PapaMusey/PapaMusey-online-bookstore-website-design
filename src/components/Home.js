import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay } from 'swiper/modules';


export default function Home() {
  return (
    <section id='home' className='home'>
      <div className='row'>
        <div className='content'>
          <h3>Up to 75% off</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua...
          </p>
          <button>Shop Now</button>
        </div>
        <div className='books-slider'>
          <Swiper
            loop={true}
            autoplay={{ delay: 2200, disableOnInteraction: false }}
            speed={1500}
            pagination={{ clickable: true }}
            spaceBetween={20}
            centeredSlides={true}
            breakpoints={{
              0: { slidesPerView: 1, centeredSlides: true },
              768: { slidesPerView: 2, centeredSlides: false },
              1024: { slidesPerView: 3, centeredSlides: false },
            }}
            modules={[ Autoplay]}
            className="swiper-container"
          >
            <SwiperSlide><img src='image/book-images/book-image1.jpg' alt='Book 1' /></SwiperSlide>
            <SwiperSlide><img src='image/book-images/habits-of-highly-effective-people.jpg' alt='Book 2' /></SwiperSlide>
            <SwiperSlide><img src='image/book-images/power-of-character-in-leadership.jpg' alt='Book 3' /></SwiperSlide>
            <SwiperSlide><img src='image/book-images/the-mind-of-the-leader.jpg' alt='Book 4' /></SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>
  );
}
