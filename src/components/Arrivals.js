import React from 'react'
import arrivalsData from './ArrivalsData'
import ArrivalsCard from './ArrivalsCard'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/grid';
import { Autoplay, Grid } from 'swiper/modules';

export default function Arrivals() {
    return (
<section className='arrivals' id="arrivals">
            <h1 className='heading'>
                <span>New Arrivals</span>
            </h1>
            <Swiper
                spaceBetween={20} 
                slidesPerView={2} 
                grid={{ rows: 2, fill: "row" }} 
                loop={false}
                autoplay={{ delay: 3000, disableOnInteraction: false }} 
                speed={2000}
                 modules={[Grid, Autoplay]} 
                className="arrivals-slider"
            >
                {arrivalsData.map((arrivalcard) => (
                    <SwiperSlide key={arrivalcard.id}>
                        <ArrivalsCard
                            {...arrivalcard} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>    )
}
