import React from 'react'
import './Testimonials.css'
import TestimonialCard from './Containers/TestimonialCard'

const Testimonials = () => {

    const testimonialDetailsArray = [
        {
            id: 0,
            data: {
                imgSrc: require('../assets/avatar5.png'),
                reviewRating: 4,
                reviewerMessage: 'Amazing Developer. Highly recommended for any front-end development project and looking forward for my next project.',
                reviewerName: 'Test Name',
                reviewerLocation: 'Kolkata, India',
            }
        }, {
            id: 1,
            data: {
                imgSrc: require('../assets/avatar1.png'),
                reviewRating: 5,
                reviewerMessage: 'Amazing Developer. Highly recommended for any front-end development project and looking forward for my next project.',
                reviewerName: 'Test Name',
                reviewerLocation: 'Kolkata, India',
            }
        }, {
            id: 2,
            data: {
                imgSrc: require('../assets/avatar2.png'),
                reviewRating: 5,
                reviewerMessage: 'Amazing Developer. Highly recommended for any front-end development project and looking forward for my next project.',
                reviewerName: 'Test Name',
                reviewerLocation: 'Kolkata, India',
            }
        }, {
            id: 3,
            data: {
                imgSrc: require('../assets/avatar3.png'),
                reviewRating: 4,
                reviewerMessage: 'Amazing Developer. Highly recommended for any front-end development project and looking forward for my next project.',
                reviewerName: 'Test Name',
                reviewerLocation: 'Kolkata, India',
            }
        }
    ]

    return (
        <>
            <div className='testimonials comp-head'>
                <h4 className="head-text">Testimonials</h4>
                <h2 className="main-head">My Clients</h2>
                <div className='testimonials-body'>
                    {
                        testimonialDetailsArray.map((curEle) => (
                            <TestimonialCard data={curEle.data} key={curEle.id} />
                        ))
                    }
                </div>

            </div>

        </>
    )
}

export default Testimonials
