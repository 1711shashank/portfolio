import React from 'react'
import GradeIcon from '@mui/icons-material/Grade';

const TestimonialCard = (props) => {

    const { imgSrc, reviewRating, reviewerMessage, reviewerName, reviewerLocation } = props.data;

    const gradeIcons = [];
    for (let index = 0; index < reviewRating; index++) {
        gradeIcons.push(<GradeIcon key={index} />);
    }

    return (
        <>
            <div className='testimonialCard'>
                <div className='testimonialCard-head'>
                    <img
                        className='avatar-image'
                        src={imgSrc}
                        alt=''
                    />
                    <div className='testimonialCard-start'>
                        {gradeIcons}
                    </div>
                </div>
                <div className='testimonialCard-review'>
                    <h3>{reviewerMessage}</h3>
                </div>
                <div className='testimonialCard-reviewer-details'>
                    <h3>{reviewerName}</h3>
                    <h3>{reviewerLocation}</h3>
                </div>
            </div>

        </>
    )
}

export default TestimonialCard
