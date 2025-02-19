import React from 'react'

export default function FeaturedBook({featuredbookImage, discountedPrice, realPrice }) {
    return (
        <div className='featured-slider'>
            <div className='wrapper'>
                <div className='box'>
                    <div className='icons'>
                        <a href='#' className='fas fa-search'></a>
                        <a href='#' className='fas fa-heart'></a>
                        <a href='#' className='fas fa-eye'></a>
                    </div>
                    <div className='image'>
                        <img src={featuredbookImage} alt='' />
                    </div>
                    <div className='content'>
                        <h3>Featured books</h3>
                        <div className='price'>{discountedPrice} <span>{realPrice}</span></div>
                        <button>Add to cart</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
