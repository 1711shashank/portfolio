import React from 'react'
import './Portfolio.css'
import ProjectCard from './Containers/ProjectCard'

const Portfolio = () => {
    return (
        <>
            <div id='Portfolio' className="portfolio comp-head">
                <h4 className="head-text">Portfolio</h4>
                <h2 className="main-head">Web Development</h2>
                <div className='portfolio-body'>
                    <ProjectCard cardSide={'Left'} redirectURL={'https://clone-af8c1.web.app/'} title={'E-commerce Website'} desc={'Amazon clone'} sourceImg={require("../assets/amazonClone.png")} />
                    <ProjectCard cardSide={'Right'} redirectURL={'https://splitwise-client.onrender.com'} title={'SplitWise'} desc={'Expense sharing'} sourceImg={require("../assets/splitwise.jpeg")} />
                    <ProjectCard cardSide={'Left'} redirectURL={'https://goartonline.onrender.com'} title={'GoArtOnline'} desc={`An Art Marketplace's `} sourceImg={require("../assets/goArtOnline.jpeg")} />
                    <ProjectCard cardSide={'Right'} redirectURL={'https://github.com/1711shashank/SocialMediaAPI-Assessment'} title={'Social Media API'} desc={'Social Media API'} sourceImg={require("../assets/apiManager.png")} />
                </div>
            </div>
        </>
    )
}

export default Portfolio
