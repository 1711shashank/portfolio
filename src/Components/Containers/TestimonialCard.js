import React, { useEffect } from 'react'
import GradeIcon from '@mui/icons-material/Grade';

const TestimonialCard = (props) => {

    console.log('test');
    useEffect(() => {
        console.log('kjhg');
      },[])
    

    return (
        <>
            <div className='testimonialCard'>
                <div className='testimonialCard-head'>
                    <img
                        className='avatar-image'
                        src='https://www.varunvishal.dev/static/media/avatar6.eabfed3b.png'
                        alt=''
                    />
                    <div className='testimonialCard-start'>
                        <GradeIcon/>
                        <GradeIcon/>
                        <GradeIcon/>
                        <GradeIcon/>
                        <GradeIcon/>
                    </div>
                </div>
                <div className='testimonialCard-review'>
                    <h3>Work been done in a professional way. App is working perfectly. Thanks.</h3>
                </div>
                <div className='testimonialCard-reviewer-details'>
                    <h3>Name</h3>
                    <h3>India</h3>
                </div>
            </div>

        </>
    )
}

export default TestimonialCard
