import React from 'react'

export default function Icons() {
    return (
        <section className='icons-container'>
            
            <div className='icons'>
                <i className='fas fa-paper-plane'> </i>
                <div className='content'>
                <h3>Free Shipping</h3>
                <p>Order over $100</p>
                </div>
            </div>
            <div className='icons'>
                <i className='fas fa-lock'> </i>
                <div className='content'>
                <h3>Secure Payment</h3>
                <p>100% Secure Payment</p>
                </div>
            </div>
            <div className='icons'>
                <i className='fas fa-redo-alt'> </i>
                <div className='content'>
                <h3>Easy Returns</h3>
                <p>10 days Returns</p>
                </div>
            </div>
            <div className='icons'>
                <i className='fas fa-headset'> </i>
                <div className='content'>
                <h3>24/7</h3>
                <p>Call us anytime</p>
                </div>
            </div>
        </section>
    )
}
