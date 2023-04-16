import React from 'react'
import './Portfolio.css'
import ProjectCard from './Containers/ProjectCard'

const Portfolio = () => {
    return (
        <>
            <div className="portfolio comp-head">
                <h4 className="head-text">Portfolio</h4>
                <h2 className="main-head">Web Development</h2>
                <div className='portfolio-body'>
                    <ProjectCard cardSide={'Left'}  redirectURL={'https://clone-af8c1.web.app/'}  title={'E-commerce Website'} desc={'Amazon clone'} sourceImg={require("../assets/amazonClone.png") }/>
                    <ProjectCard cardSide={'Right'} redirectURL={'https://splitwise-client.onrender.com'}  title={'SplitWise'} desc={'Expense sharing'} sourceImg={require("../assets/splitwise.jpeg") }/>
                    <ProjectCard cardSide={'Left'}  redirectURL={'https://shorturl-shashank.netlify.app'}  title={'Link Condenser'} desc={'Shorten long website links'} sourceImg={require("../assets/linkCondenser.jpeg") }/>
                    <ProjectCard cardSide={'Right'} redirectURL={'https://task-manager-e3i7.onrender.com'}  title={'Task Manager'} desc={'Track your daily Tasks and activities'} sourceImg={require("../assets/activityManager.png") }/>
                </div>
            </div>
        </>
    )
}

export default Portfolio
