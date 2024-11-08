import React from 'react'

export default function Arrivals() {
  return (
    <section className='arrivals'>
        <h1 className='heading'>
            <span>New Arrivals</span>
        </h1>
        <div className='arrivals-slider'>
            <div className='wrapper'>
                 {/* Slide content */}
      {/* <SwiperSlide> This Section should contain the <a href> tags</SwiperSlide>
      <SwiperSlide>Slide 2</SwiperSlide>
      <SwiperSlide>Slide 3</SwiperSlide> */}
                <a href='#' className='box'>
                    <div className='image'>
                        <img src='image/book-3.png' alt='' />
                    </div>
                    <div className='content'>
                       <h3>New Arrivals</h3>
                       <div className='price'>$15.99 <span>$20.99</span></div>
                       <div className='stars'>
                        <i className='fas fa-star'></i>
                        <i className='fas fa-star'></i>
                        <i className='fas fa-star'></i>
                        <i className='fas fa-star'></i>
                        <i className='fas fa-star-half-alt'></i>
                       </div>
                    </div>
                </a>
                <a href='#' className='box'>
                    <div className='image'>
                        <img src='image/book-4.png' alt='' />
                    </div>
                    <div className='content'>
                       <h3>New Arrivals</h3>
                       <div className='price'>$15.99 <span>$20.99</span></div>
                       <div className='stars'>
                        <i className='fas fa-star'></i>
                        <i className='fas fa-star'></i>
                        <i className='fas fa-star'></i>
                        <i className='fas fa-star'></i>
                        <i className='fas fa-star-half-alt'></i>
                       </div>
                    </div>
                </a>
                <a href='#' className='box'>
                    <div className='image'>
                        <img src='image/book-5.png' alt='' />
                    </div>
                    <div className='content'>
                       <h3>New Arrivals</h3>
                       <div className='price'>$15.99 <span>$20.99</span></div>
                       <div className='stars'>
                        <i className='fas fa-star'></i>
                        <i className='fas fa-star'></i>
                        <i className='fas fa-star'></i>
                        <i className='fas fa-star'></i>
                        <i className='fas fa-star-half-alt'></i>
                       </div>
                    </div>
                </a>
                <a href='#' className='box'>
                    <div className='image'>
                        <img src='image/book-6.png' alt='' />
                    </div>
                    <div className='content'>
                       <h3>New Arrivals</h3>
                       <div className='price'>$15.99 <span>$20.99</span></div>
                       <div className='stars'>
                        <i className='fas fa-star'></i>
                        <i className='fas fa-star'></i>
                        <i className='fas fa-star'></i>
                        <i className='fas fa-star'></i>
                        <i className='fas fa-star-half-alt'></i>
                       </div>
                    </div>
                </a>
                <a href='#' className='box'>
                    <div className='image'>
                        <img src='image/book-7.png' alt='' />
                    </div>
                    <div className='content'>
                       <h3>New Arrivals</h3>
                       <div className='price'>$15.99 <span>$20.99</span></div>
                       <div className='stars'>
                        <i className='fas fa-star'></i>
                        <i className='fas fa-star'></i>
                        <i className='fas fa-star'></i>
                        <i className='fas fa-star'></i>
                        <i className='fas fa-star-half-alt'></i>
                       </div>
                    </div>
                </a>
                <a href='#' className='box'>
                    <div className='image'>
                        <img src='image/book-2.png' alt='' />
                    </div>
                    <div className='content'>
                       <h3>New Arrivals</h3>
                       <div className='price'>$15.99 <span>$20.99</span></div>
                       <div className='stars'>
                        <i className='fas fa-star'></i>
                        <i className='fas fa-star'></i>
                        <i className='fas fa-star'></i>
                        <i className='fas fa-star'></i>
                        <i className='fas fa-star-half-alt'></i>
                       </div>
                    </div>
                </a>
                <a href='#' className='box'>
                    <div className='image'>
                        <img src='image/book-1.png' alt='' />
                    </div>
                    <div className='content'>
                       <h3>New Arrivals</h3>
                       <div className='price'>$15.99 <span>$20.99</span></div>
                       <div className='stars'>
                        <i className='fas fa-star'></i>
                        <i className='fas fa-star'></i>
                        <i className='fas fa-star'></i>
                        <i className='fas fa-star'></i>
                        <i className='fas fa-star-half-alt'></i>
                       </div>
                    </div>
                </a>
            </div>
        </div>
    </section>    
  )
}
