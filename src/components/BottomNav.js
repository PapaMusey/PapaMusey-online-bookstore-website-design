import React from 'react';

export default function BottomNav() {
  return (
    <>
      <nav className='bottom-navbar'>
        <a href='#home' className='fas fa-home'>Home</a>
        <a href='#featured' className='fas fa-list'>Featured</a>
        <a href='#arrivals' className='fas fa-tags'>Arrivals</a>
        <a href='#reviews' className='fas fa-comments'>Reviews</a>
        <a href='#contact' className='fas fa-bogs'>Contact</a>
      </nav>

    </>
  )
}