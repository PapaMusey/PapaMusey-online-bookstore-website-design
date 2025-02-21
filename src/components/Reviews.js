import React from 'react'
import reviewsData from './ReviewsData'
import ReviewsCard from './ReviewsCard'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/grid';
import { Autoplay, Grid } from 'swiper/modules';

export default function Reviews() {
    return (
        <section id='reviews' className='reviews'>
            <h1 className='heading'><span>Client's Reviews</span></h1>
            <Swiper
                spaceBetween={20}  // ✅ Added spacing to prevent overlap
                loop={true}
                autoplay={{ delay: 3000, disableOnInteraction: false }}
                speed={2000}
                breakpoints={{
                    0: { slidesPerView: 2 },  // ✅ Show 2 cards on <768px
                    768: { slidesPerView: 3 }, // ✅ Show 3 cards on >=768px
                }}
                modules={[Autoplay]}
                className="reviews-slider"
            >
                {reviewsData.map((review) => (
                    <SwiperSlide key={review.id}>
                        <ReviewsCard
                            {...review}
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    )
}
