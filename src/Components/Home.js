import React from 'react'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';
import "./Home.css"

const Home = () => {
    return (
        <>
            <div className='home'>
                <span className='span' />
                <div className='home-body'>
                    <div className='home-left'>
                        <h1 className="home-message glitch">Hello, I’m Kumar Shashank</h1>
                        <h2 className="sub-text"> A <span className='inner-span'>React Developer</span>, passionate about creating minimal interfaces.</h2>
                    </div>
                    <div className='home-right'>
                        <div className='social-container'>
                            <h4 className="follow-text">Follow me on</h4>
                            <ul className="list-unstyled">
                                <a
                                    href="https://github.com/1711shashank"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <li title="GitHub">
                                        <GitHubIcon />
                                    </li>
                                </a>
                                <a
                                    href="https://linkedin.com/in/1711shashank"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <li title="GitHub">
                                        <LinkedInIcon />
                                    </li>
                                </a>
                                <a
                                    href="https://twitter.com/KrShashankk"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <li title="GitHub">
                                        <TwitterIcon />
                                    </li>
                                </a>

                            </ul>
                        </div>
                    </div>
                </div>


            </div>
        </>
    )
}

export default Home
