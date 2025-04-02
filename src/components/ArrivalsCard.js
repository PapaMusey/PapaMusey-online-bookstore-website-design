import React from 'react'

export default function ArrivalsCard({bookImage, discountedPrice, realPrice}) {
  return (
    <div className='arrivals-slider'>
                <div className='wrapper'>
                    <a href='#' onClick={(e) => e.preventDefault()}  className='box'>
                        <div className='image'>
                            <img src={bookImage} alt='book-image' loading='lazy' />
                        </div>
                        <div className='content'>
                            <h3>New Arrivals</h3>
                            <div className='price'>{discountedPrice} <span>{realPrice}</span></div>
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
  )
}
