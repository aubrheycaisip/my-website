import React from "react"
import {projects} from '../../constant/Projects.js'
import './Project.css'
import ProgressBar from './ProgressBar.js'

class Project extends React.Component{
    render(){
        return(<div className='project-div'>
            {projects.map((project,index)=>
                    <div className='project-list-div' key={index}>
                        <div style={{
                            backgroundImage:`url(${project.backgroundPic})`,
                            borderRadius: '0px 25px 25px 0px',
                            padding: '25px 50px 25px 40px',
                            backgroundRepeat: 'no-repeat',
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            height: '560px'
                            }}>
                            <div className="project-inner-container">
                                <img src={project.logo} alt={project.projectName}/>
                                <div className="project-information-div">
                                    <h1>{project.projectName}</h1>
                                    <p>{project.projectDescription}</p>
                                    <p>Assignment: {project.assignment}</p>
                                    <p>Tools: {project.tools}</p>
                                    <div style={{
                                        display:'flex'
                                    }}>
                                        <p style={{
                                            margin: '0 15px 0 0'
                                        }}>Work: </p>
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