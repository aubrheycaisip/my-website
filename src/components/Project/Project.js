import React from "react"
import {projects} from '../../constant/Projects.js'
import './Project.css'
import ProgressBar from './ProgressBar.js'

class Project extends React.Component{
    render(){
        return(<div className='project-div'>
            {projects.map((project,index)=>
                    <div className='project-list-div' key={index}>
                        <div className='project-bar-bg'></div>
                        <div style={{
                            backgroundImage:`url(${project.backgroundPic})`,
                            borderRadius: '25px',
                            padding: '50px 50px',
                            backgroundRepeat: 'no-repeat',
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            height: '535px',
                            width: '85%',
                            margin: '-530px auto 10px',
                            boxShadow: "1px 2px 1px #E6ECEA",
                            maxWidth: '1224px'
                            }}>
                            <div className="project-inner-container">
                                <img src={project.logo} alt={project.projectName}/>
                                <div className="project-information-div">
                                    <h1>{project.projectName}</h1>
                                    <p>{project.projectDescription}</p>
                                    <p><strong>Assignment:</strong> {project.assignment}</p>
                                    <p><strong>Tools:</strong> {project.tools}</p>
                                    <div style={{
                                        display:'flex'
                                    }}>
                                        <p style={{
                                            margin: '0 15px 0 0'
                                        }}><strong>Work:</strong> </p>
                                        <ProgressBar percentage={project.work} label={`${project.work}%`}/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
        </div>);
    }
}

export default Project