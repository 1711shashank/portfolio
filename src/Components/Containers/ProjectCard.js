import React from 'react'

const ProjectCard = (props) => {
    const { title, desc, sourceImg, cardSide } = props;
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
                    />
                </div>
               
            </div>
        </>
    )
}

export default ProjectCard
