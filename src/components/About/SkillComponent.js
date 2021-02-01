import React from "react";
import Skills from "../../constant/Skills.js";

class SkillComponent extends React.Component{
    render(){
        const skillDivStyle = {
            "minHeight":"821px"
        }
        return(
            <div style={skillDivStyle}>
                <div style={{
                    "backgroundColor": "#2bae66ff",
                    "color":"#fcf6f5ff",
                    padding: "5rem 1rem 14rem"
                }}>
                    <div style={{
                            width: '50%',
                            margin: 'auto',
                            lineHeight: '1.5',
                            minWidth: '273.500px'
                        }}>
                        <p style={{
                            "fontSize": "27px",
                            "fontWeight": "bold"
                        }}>Hi I'm Aubrhey. Nice to meet you.</p>
                        <p>I believe in my field learning never stop. To be able to keep up with ever-growing technology constantly learning new things is necessary. Here are some language and framework I learn in my previous work experience.</p>
                    </div>
                </div>
                <div style={{
                        display: "flex",
                        flexWrap: "wrap",
                        padding: "10px",
                        justifyContent: "center",
                        marginTop: "-200px"
                    }}>
                    <Skills/>
                </div>
            </div>
        )
    }
}
export default SkillComponent;