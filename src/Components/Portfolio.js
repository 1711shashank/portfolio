import React from 'react'
import './Portfolio.css'
import ProjectCard from './Containers/ProjectCard'

const Portfolio = () => {
    return (
        <>
            <div className="portfolio">
                <h4 className="head-text">Portfolio</h4>
                <h2 className="main-head">Web Development</h2>
                <div className='portfolio-body'>
                    <ProjectCard cardSide={'Left'} title={'SplitWise'} desc={'Expense-sharing'} sourceImg={require("../assets/web2.png") }/>
                    <ProjectCard cardSide={'Right'}title={'SplitWise'} desc={'Expense-sharing'} sourceImg={require("../assets/web3.png") }/>
                    <ProjectCard cardSide={'Left'} title={'SplitWise'} desc={'Expense-sharing'} sourceImg={require("../assets/web4.png") }/>
                    <ProjectCard cardSide={'Right'}title={'SplitWise'} desc={'Expense-sharing'} sourceImg={require("../assets/web5.png") }/>
                </div>
            </div>
        </>
    )
}

export default Portfolio
