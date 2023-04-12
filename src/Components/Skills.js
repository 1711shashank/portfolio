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
                src: require('../assets/vscode.svg'),
            },
            {
                title: "Figma",
                id: 1,
                src: require("../assets/vscode.svg"),
            },
            {
                title: "Salesforce",
                id: 2,
                src: require("../assets/vscode.svg"),
            },
        ],
    };


    return (
        <>
            <div className="skills">

                <h4 className="head-text">What I Know?</h4>
                <h2 className="main-head">My Skills</h2>

                <div className="skills-body">
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

                                    {/* <img
                                        src={tool.src}
                                        alt="logo"
                                        className="tool-icon"
                                    /> */}
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
