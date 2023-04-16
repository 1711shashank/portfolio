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
                    <ProjectCard cardSide={'Left'} title={'E-commerce Website'} desc={'Amazon clone'} sourceImg={require("../assets/amazonClone.png") }/>
                    <ProjectCard cardSide={'Right'} title={'SplitWise'} desc={'Expense sharing'} sourceImg={require("../assets/splitwise.jpeg") }/>
                    <ProjectCard cardSide={'Left'} title={'Link Condenser'} desc={'Shorten long website links'} sourceImg={require("../assets/linkCondenser.png") }/>
                    <ProjectCard cardSide={'Right'}title={'Activity Manager'} desc={'Manager you every day Activity'} sourceImg={require("../assets/activityManager.png") }/>

                </div>
            </div>
        </>
    )
}

export default Portfolio
