import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

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
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            centeredSlides={false}  
            pagination={{ clickable: true }}
            spaceBetween={20}  
            breakpoints={{
              0: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            modules={[Pagination]}
            className="swiper-container"
          >
            <SwiperSlide><img src='image/book-image1.jpg' alt='Book 1' /></SwiperSlide>
            <SwiperSlide><img src='image/habits-of-highly-effective-people.jpg' alt='Book 2' /></SwiperSlide>
            <SwiperSlide><img src='image/power-of-character-in-leadership.jpg' alt='Book 3' /></SwiperSlide>
            <SwiperSlide><img src='image/the-mind-of-the-leader.jpg' alt='Book 4' /></SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>
  );
}
