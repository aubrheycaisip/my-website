import React from "react";

const ProjectItem = (props) => {
    return (
        <div className='flip-card'>
            <div className='flip-card-inner'>
                <div
                    className='flip-card-front'
                    // style={{
                    //     backgroundImage: `url(${props.project.backgroundPic})`
                    // }}
                >
                    <h1>{props.project.title}</h1>
                </div>
                <div className='flip-card-back'>
                    <h1>Back View</h1>
                </div>
            </div>
        </div>
    );
};

export default ProjectItem;
