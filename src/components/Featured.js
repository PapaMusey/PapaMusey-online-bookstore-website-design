import React from 'react'

export default function Featured() {
  return (
    <section className='featured' id='featured'>
        <h1 className='heading'><span>Featured Books</span> </h1>
        <div className='featured-slider'>
            <div className='wrapper'>
                <div className='box'>
                    <div className='icons'>
                        <a href='#' className='fas fa-search'></a>
                        <a href='#' className='fas fa-heart'></a>
                        <a href='#' className='fas fa-eye'></a>
                    </div>
                    <div className='image'>
                        <img src='image/book-2.png' alt='' />
                    </div>
                    <div className='content'>
                    <h3>Featured books</h3>
                    <div className='price'>$15.99 <span>$20.99</span></div>
                    <a href='#' className='btn'>Add to cart</a>
                    </div>
                </div>
                <div className='box'>
                    <div className='icons'>
                        <a href='#' className='fas fa-search'></a>
                        <a href='#' className='fas fa-heart'></a>
                        <a href='#' className='fas fa-eye'></a>
                    </div>
                    <div className='image'>
                        <img src='image/book-3.png' alt='' />
                    </div>
                    <div className='content'>
                    <h3>Featured books</h3>
                    <div className='price'>$15.99 <span>$20.99</span></div>
                    <a href='#' className='btn'>Add to cart</a>
                    </div>
                </div>
                <div className='box'>
                    <div className='icons'>
                        <a href='#' className='fas fa-search'></a>
                        <a href='#' className='fas fa-heart'></a>
                        <a href='#' className='fas fa-eye'></a>
                    </div>
                    <div className='image'>
                        <img src='image/book-4.png' alt='' />
                    </div>
                    <div className='content'>
                    <h3>Featured books</h3>
                    <div className='price'>$15.99 <span>$20.99</span></div>
                    <a href='#' className='btn'>Add to cart</a>
                    </div>
                </div>
                <div className='box'>
                    <div className='icons'>
                        <a href='#' className='fas fa-search'></a>
                        <a href='#' className='fas fa-heart'></a>
                        <a href='#' className='fas fa-eye'></a>
                    </div>
                    <div className='image'>
                        <img src='image/book-5.png' alt='' />
                    </div>
                    <div className='content'>
                    <h3>Featured books</h3>
                    <div className='price'>$15.99 <span>$20.99</span></div>
                    <a href='#' className='btn'>Add to cart</a>
                    </div>
                </div>
                <div className='box'>
                    <div className='icons'>
                        <a href='#' className='fas fa-search'></a>
                        <a href='#' className='fas fa-heart'></a>
                        <a href='#' className='fas fa-eye'></a>
                    </div>
                    <div className='image'>
                        <img src='image/book-6.png' alt='' />
                    </div>
                    <div className='content'>
                    <h3>Featured books</h3>
                    <div className='price'>$15.99 <span>$20.99</span></div>
                    <a href='#' className='btn'>Add to cart</a>
                    </div>
                </div>
                <div className='box'>
                    <div className='icons'>
                        <a href='#' className='fas fa-search'></a>
                        <a href='#' className='fas fa-heart'></a>
                        <a href='#' className='fas fa-eye'></a>
                    </div>
                    <div className='image'>
                        <img src='image/book-7.png' alt='' />
                    </div>
                    <div className='content'>
                    <h3>Featured books</h3>
                    <div className='price'>$15.99 <span>$20.99</span></div>
                    <a href='#' className='btn'>Add to cart</a>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
    // APPLY THE SWIPER FEATURE HERE WITH THE BACK AND NEXT BUTTONS
    // <Swiper>
    {/* Navigation buttons */}
    // <div className="swiper-button-next"></div>
    // <div className="swiper-button-prev"></div>
    // </Swiper>
}

