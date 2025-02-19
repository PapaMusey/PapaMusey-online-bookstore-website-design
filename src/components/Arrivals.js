import React from 'react'
import arrivalsData from './ArrivalsData'
import ArrivalsCard from './ArrivalsCard'

export default function Arrivals() {
    return (
        <section className='arrivals' id="arrivals">
            <h1 className='heading'>
                <span>New Arrivals</span>
            </h1>
           {arrivalsData.map((arrivalcard) =>
        <ArrivalsCard 
        key={arrivalcard.id}
        {...arrivalcard}
        />
        )}
        </section>
    )
}
