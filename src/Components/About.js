import React from 'react'
import './About.css';
import LocationOnIcon from '@mui/icons-material/LocationOn';


const About = () => {
    return (
        <>
            <div className='about'>
                <div className='about-left'>
                    <img className='about-image' src={require('../assets/profile.png')} />
                </div>
                <div className='about-right'>
                    <h4 className='head-text'> Who am I ? </h4>
                    <h2 className='main-head'> About me </h2>
                    <p className='about-right-location'> Kolkata, India | React JS | Node | Salesforce</p>
                    <p className='about-right-aboutMe'> A Developer and A UI/UX Designer. Interested in coding, but not everything about me is designs and code snippets. I have a particular proclivity for playing the guitar and various other instruments, taking an interest in music composition and travelling. </p>
                    <div class="about-resume-button">
                        <a href={require("../assets/resume.pdf")} target="_blank">
                            <span>Resume</span>
                            <svg width="13px" height="10px" viewBox="0 0 15 10">
                                <path d="M1,5 L11,5"></path>
                                <polyline points="8 1 12 5 8 9"></polyline>
                            </svg>
                        </a>
                    </div>
                </div>
            </div>

        </>
    )
}

export default About
