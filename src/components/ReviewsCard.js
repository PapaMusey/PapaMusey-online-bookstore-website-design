import React from 'react'

export default function ReviewsCard({ name, image, review }) {
    return (
        <div className='reviews-slider'>
            <div className='wrap'>
                {/* REMEMBER TO ADD THE SLIDER */}
                <div className='box'>
                    <img src={image} alt='' />
                    <h3>{name}</h3>
                    <p>{review}</p>
                    <div className='stars'>
                        <i className='fas fa-star'></i>
                        <i className='fas fa-star'></i>
                        <i className='fas fa-star'></i>
                        <i className='fas fa-star'></i>
                        <i className='fas fa-star-half-alt'></i>
                    </div>
                </div>
            </div>
        </div>

    )
}
