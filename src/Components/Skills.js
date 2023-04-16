import React from 'react'
import './Skills.css'

const Skills = () => {

    const skillsArray = {
        development: [
            {
                title: "HTML/CSS/JS",
                id: 0,
            },
            {
                title: "React JS",
                id: 1,
            },
            {
                title: "LWC",
                id: 2,
            }
        ],
        tools: [
            {
                title: "VS Code",
                id: 0,
            },
            {
                title: "Figma",
                id: 1,
            },
            {
                title: "Salesforce",
                id: 2,
            },
        ],
    };


    return (
        <>
            <div className="skills comp-head">

                <h4 className="head-text">What I Know?</h4>
                <h2 className="main-head">My Skills</h2>

                <div className="skills-body">
                    {/* <img className='skills-image' src="https://dresma.ai/wp-content/uploads/2022/01/mern-stack-developer.gif"/> */}
                    <img className='skills-image' src="https://www.dignited.com/wp-content/uploads/2022/08/top10lan-1024x576.jpg"/>
                    {/* <img className='skills-image' src="https://deorwine.b-cdn.net/images/technology/mern-stack-banner.webp"/> */}
                    <div className="skills-row">
                        <ul class="list-column">
                            <h4 class="list-item-head">Development</h4>
                            {skillsArray.development.map((develop) => (
                                <li class="list-item" key={develop.id}>
                                    {develop.title}
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="skills-row">
                        <ul class="list-column">
                            <h4 class="list-item-head">TOOLS I USE</h4>
                            {skillsArray.tools.map((tool) => (
                                <li class="list-item" key={tool.id}>
                                    {tool.title}
                                </li>
                            ))}
                        </ul>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Skills
