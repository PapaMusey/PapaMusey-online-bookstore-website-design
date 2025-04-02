import React from 'react'
import { blogData } from './blogData'
import BlogCard from './BlogCard'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/grid';

export default function Blog() {
    return (
        <section className='blog' id='blog'>
            <h1 className='heading'><span>our blog</span></h1>
            <Swiper
                // spaceBetween={}
                // loop={true}
                // autoplay={{ delay: 3000, disableOnInteraction: false }}
                // speed={2000}
                breakpoints={{
                    0: { slidesPerView: 1, spaceBetween: 10 },   
                    768: { slidesPerView: 2, spaceBetween: 15 },  
                    1024: { slidesPerView: 3, spaceBetween: 20 }  
                }}
                className="blog-slider"
            >
                {blogData.map((blog) => (
                    <SwiperSlide key={blog.id}>
                        <BlogCard
                            {...blog}
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    )
}
