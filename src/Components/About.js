import React from 'react'
import './About.css';


const About = () => {
    return (
        <>
            <div id='About' className='about'>
                <div className='about-left'>
                    <img className='about-image' src={require('../assets/profile.png')} alt=''/>
                </div>
                <div className='about-right'>
                    <h4 className='head-text'> Who am I ? </h4>
                    <h2 className='main-head'> About me </h2>
                    <p className='about-right-location'> Hyderabad, India | React | React Native | Node JS</p>
                    <p className='about-right-aboutMe'> As a developer, I'm passionate about coding and creating innovative solutions. But not everything about me is code snippets. I have a particular fondness for writing Shayari and expressing myself through poetry. I also love traveling and experiencing new cultures.</p>
                    <div class="about-resume-button">
                        <a href='https://drive.google.com/file/d/1LwqpTE7-CwWDk3FO0RDnU-McH2UEEwkp/view?usp=sharing' target="_blank" alt='' rel="noreferrer">
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
