import React from 'react'

export default function BlogCard({image, blogTitle, description }) {
    return (
        <div className='blog-slider'> {/*THIS IS SUPPOSE TO FUNCTION FOR THE SLIDER */}
            <div className='wrapper'>
                <div className='box'>
                    <div className='image'>
                        <img src={image} alt='' />
                    </div>
                    <div className='content'>
                        <h3> {blogTitle} </h3>
                        <p>{description}</p>
                        <button>Read more</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
