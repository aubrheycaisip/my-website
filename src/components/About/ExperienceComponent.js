import React from "react"
import Experiences from '../../constant/Experiences'

class ExperienceComponent extends React.Component{
    render(){
        const expDivStyle = {
            "minHeight":"700px"
        }
        return(
            <div style={expDivStyle}>
                <div style={{
                    "backgroundColor": "#2bae66ff",
                    "color":"#fcf6f5ff",
                    padding: "5rem 1rem 16rem"
                }}>
                        <div>
                        <p style={{
                            "fontSize": "27px",
                            "fontWeight": "bold"
                        }}>Hi I'm Aubrhey. Nice to meet you.</p>
                        <p>I'm a goal oriented web developer. Mostly I work on backend parts of websites. Here are my skills</p>
                    </div>
                </div>
                <div style={{
                        display: "flex",
                        flexWrap: "wrap",
                        padding: "10px",
                        justifyContent: "center",
                        marginTop: "-200px"
                    }}>
                    <Experiences/>
                </div>
            </div>
        )
    }
}
export default ExperienceComponent;