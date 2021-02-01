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
                        }}>Work Experience</p>
                        <p>Workplace have a huge impact in developing one's career. Experience and Knowledge gain from company, business or corporation can be assets or become liabilities depending on how you will use it. Here is my previous company.</p>
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