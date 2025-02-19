import React from 'react'
import { blogData } from './blogData'
import BlogCard from './BlogCard'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

export default function Blog() {
    return (
        <section className='blog' id='blog'>
            <h1 className='heading'><span>our blog</span></h1>
            <Swiper
      spaceBetween={50}
      slidesPerView={3}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
            {blogData.map((blog) =>
            <BlogCard 
            key={blog.id}
            {...blog}
            />
            )}
            </Swiper>
        </section>
    )
}
