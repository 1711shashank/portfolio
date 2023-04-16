import React from 'react'

const ProjectCard = (props) => {
    const { title, desc, redirectURL, sourceImg, cardSide } = props;
    const cardMargin = cardSide === 'Left' ? '0 0 18rem 0' : '18rem 0 0 0';
    return (
        <>
            <div className='projectCard' style={{ textAlign: cardSide, margin: cardMargin }}>
                <h2>{title}</h2>
                <h4>{desc}</h4>
                <div className='projectCard-img-wrapper'>
                    <img
                        src={sourceImg}
                        alt="ui"
                        className="projectCard-img"
                    ></img>

                    <div class="projectCard-button about-resume-button">
                        <a href={redirectURL} target="_blank" alt='' rel="noreferrer">
                            <span style={{color:'white'}}> View</span>
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

export default ProjectCard
