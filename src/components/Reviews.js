import React from 'react'
import reviewsData from './ReviewsData'
import ReviewsCard from './ReviewsCard'

export default function Reviews() {
    return (
        <section id='reviews' className='reviews'>
            <h1 className='heading'><span>Client's Reviews</span></h1>

            {reviewsData.map( (review) =>
            <ReviewsCard 
            key={review.id}
            {...review}
            />
            )}
        </section>
    )
}
