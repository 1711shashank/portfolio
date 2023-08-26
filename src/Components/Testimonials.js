import React from 'react'
import './Testimonials.css'
import TestimonialCard from './Containers/TestimonialCard'

const Testimonials = () => {

    const testimonialDetailsArray = [
        {
            id: 0,
            data: {
                imgSrc: require('../assets/avatar4.png'),
                reviewRating: 4,
                reviewerMessage: `If you're looking for a developer who can work like magic with frontend technologies along with backend wizardry, look no further than Shashank. With his skills he'll surely make your project a success! Don't just take my word for it - try working with Shashank and prepare to be amazed!`,
                reviewerName: 'Shreya kumari',
                reviewerLocation: 'Bangalore, India',
            }
        },
        {
            id: 1,
            data: {
                imgSrc: require('../assets/avatar1.png'),
                reviewRating: 5,
                reviewerMessage: 'Kumar is one of the best among all people I have ever meet and is a loyal colleague, understands complex matters. He is a strong and goal oriented team player with every problem there was a solution.',
                reviewerName: 'Sourashis Paul',
                reviewerLocation: 'Kolkata, India',
            }
        },
        // {
        //     id: 2,
        //     data: {
        //         imgSrc: require('../assets/avatar2.png'),
        //         reviewRating: 5,
        //         reviewerMessage: `Kumar Shashank is a dedicated frontend developer. I have had a pleasure of working with Shashank closely on projects. 
        //         Shashank has a great understanding of frontend technologies and always upto date with latest trends and best practices. 
        //         Furthermore Shashank is a great team player who fosters collaborative and inclusive work environment. He is always open to feedback and eager to contribute to discussions, making them valuable asset in team project. 
        //         It is great working and learning with Shashank.`,
        //         reviewerName: 'Ashwini Pandey ',
        //         reviewerLocation: 'Delhi, India',
        //     }
        // }
    ]

    return (
        <>
            <div className='testimonials comp-head'>
                <h4 className="head-text">Testimonials</h4>
                <h2 className="main-head">My Colleague</h2>
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
