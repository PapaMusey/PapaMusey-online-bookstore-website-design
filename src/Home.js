import React from 'react'

export default function Home() {
  return (
    <section id='home' className='home'>
            <div className='row'>
            <div className='content'>
            <h3>Upto 75% off</h3>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            </p>
            <button>Show Now</button>
        </div>

        <div className='books-slider'>
            <div className='wrapper'>
            <a href='#'><img src='image/book-1.png' alt='' /></a>
            <a href='#'><img src='image/book-1.png' alt='' /></a>
            <a href='#'><img src='image/book-1.png' alt='' /></a>
            <a href='#'><img src='image/book-1.png' alt='' /></a>
            <a href='#'><img src='image/book-1.png' alt='' /></a> 
            <a href='#'><img src='image/book-1.png' alt='' /></a>
            </div>
            <img src='image/stand.png' alt='' className='stand'/>
        </div>
    </div>

    </section>
  )
}
