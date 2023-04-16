import React from 'react'
import './Services.css'

const Services = () => {
    return (
        <>
            <div className='services'>
                <div className='services-left'>
                    <h4 className="head-text">What I do ?</h4>
                    <h2 className="main-head">My Services</h2>
                    <div className='service-icon-row'>
                        <div className='service-icon-block'>
                            <img
                                src={require("../assets/web-development.png")}
                                alt="web"
                                className="service-icon"
                            />
                            <h4 className="service-name">Web Development</h4>
                        </div>
                        <div className='service-icon-block'>
                            <img
                                src={require("../assets/mobile-development.png")}
                                alt="web"
                                className="service-icon"
                            />
                            <h4 className="service-name">Backend Development</h4>
                        </div>
                        <div className='service-icon-block'>
                            <img
                                src={require("../assets/salesforce-development.png")}
                                alt="web"
                                className="service-icon"
                            />
                            <h4 className="service-name">Salesforce Development</h4>
                        </div>
                    </div>
                </div>

                <div className='services-right'>
                    <img src={'https://i.pinimg.com/originals/d6/af/b6/d6afb6c5702631ed7e304d2ac40fb4f2.gif'} />
                    {/* <img src={'https://thumbs.gfycat.com/HastyAntiqueBetafish-size_restricted.gif'} /> */}
                </div>

            </div>
        </>
    )
}

export default Services
