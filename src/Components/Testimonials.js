import React from 'react'
import './Testimonials.css'
import TestimonialCard from './Containers/TestimonialCard'

const Testimonials = () => {

    const testimonialDetailsArray = [
        {
            id: 0,
            data: {
                imgSrc: '',
                reviewRating: 5,
                reviewMessage: 'Amazing Developer. Highly recommended for any front-end development project and looking forward for my next project.',
                reviewerName: 'Test Name',
                reviewerLocation: 'Kolka,ta, India',
            }
        }
    ]
    console.log(testimonialDetailsArray);

    return (
        <>
            <div className='testimonials'>
                <h4 className="head-text">Testimonials</h4>
                <h2 className="main-head">My Clients</h2>
                <div className='testimonials-body'>
                {
                        testimonialDetailsArray.map((curEle) => (
                            <TestimonialCard data={curEle} key={curEle.id} />
                        ))
                    }
                </div>

            </div>

        </>
    )
}

export default Testimonials
