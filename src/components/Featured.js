import React from 'react'
import FeaturedBook from './FeaturedBook'
import featuredData from './featuredData'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';


export default function Featured() {
    return (
        <section className='featured' id='featured'>
            <h1 className='heading'><span>Featured Books</span> </h1>
            <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                spaceBetween={20}
                slidesPerView={1}
                centeredSlides={true}
                navigation
                pagination={{ clickable: true }}
                autoplay={{ delay: 2200, disableOnInteraction: false }}
                speed={1500}    
                breakpoints={{
                    0: { slidesPerView: 1, centeredSlides: true },
                    768: { slidesPerView: 2, centeredSlides: true },
                    1024: { slidesPerView: 3, centeredSlides: true } 
                }}
            >

                {featuredData.map((featuredBook) => (
                    <SwiperSlide key={featuredBook.id}>
                        <FeaturedBook
                            key={featuredBook.id}
                            {...featuredBook}
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    )
}
