import React from 'react'
// import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/swiper-bundle.min.css';


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

        {/* <Swiper
      spaceBetween={50} // Space between slides in px
      slidesPerView={1} // Number of slides per view
      loop={true}       // Infinite loop mode
      pagination={{ clickable: true }} // Add pagination dots
      navigation       // Add navigation buttons (requires Swiper styles)
    >
        <SwiperSlide></SwiperSlide>
        <SwiperSlide></SwiperSlide>
        <SwiperSlide></SwiperSlide>
        <SwiperSlide></SwiperSlide>
        <SwiperSlide></SwiperSlide>
        <SwiperSlide></SwiperSlide>
    </Swiper> */}
        <div className='books-slider'>
            <div className='wrapper'>
            <a href='#'><img src='image/book-1.png' alt='' /></a>
            <a href='#'><img src='image/book-1.png' alt='' /></a>
            <a href='#'><img src='image/book-1.png' alt='' /></a>
            <a href='#'><img src='image/book-1.png' alt='' /></a>
            <a href='#'><img src='image/book-1.png' alt='' /></a> 
            <a href='#'><img src='image/book-1.png' alt='' /></a>
            </div>
            <img src='image/stand.png' alt='' className='stand'/>
        </div>
    </div>

    </section>
  )
}
