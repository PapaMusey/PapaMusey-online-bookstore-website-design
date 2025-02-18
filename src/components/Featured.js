import React from 'react'
import FeaturedBook from './FeaturedBook'
import featuredData from './featuredData'


// APPLY THE SWIPER FEATURE HERE WITH THE BACK AND NEXT BUTTONS

export default function Featured() {
    return (
        <section className='featured' id='featured'>
            <h1 className='heading'><span>Featured Books</span> </h1>
            {featuredData.map((featuredBook) =>
                <FeaturedBook
                    key={featuredBook.id}
                    {...featuredBook}
                />
            )}
        </section>
    )
}
