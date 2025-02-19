import React from 'react'
import FeaturedBook from './FeaturedBook'
import featuredData from './featuredData'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper/modules';


export default function Featured() {
    return (
        <section className='featured' id='featured'>
            <h1 className='heading'><span>Featured Books</span> </h1>
            <Swiper
                modules={[Navigation, Pagination]}
                spaceBetween={20}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                breakpoints={{
                    640: { slidesPerView: 1 },
                    768: { slidesPerView: 2 },
                    1024: { slidesPerView: 3 }
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
