import React from "react";
import DpImage from "../../images/dpimage.png";

class FirstComponent extends React.Component{
    render(){
        const mainDivStyle = {
            "color":"black",
            "maxHeight":"821px",
            "margin": "auto 20px",
            paddingTop: "90px",
            paddingBottom: "90px"
        }
        return(
            <div style={mainDivStyle}>
                <div>
                    <p style={{
                        "fontWeight": "bolder",
                        "fontSize": "50px",
                        "margin": "auto",
                    }}>
                        Programmer & Web Developer
                    </p>
                    <p style={{
                        "fontSize": "18px",
                        "fontFamily": "europa, sans-serif"
                    }}>
                        I build and develop beautiful things, and I love what I do.
                    </p>
                </div>
                <img src={DpImage} style={{
                    "background": "#2bae66ff",
                    "borderRadius": "100%",
                    "width": "23vw",
                    "marginTop": "30px",
                    "minWidth": "236.891px"
                }} alt="Aubrhey Caisip"/>
            </div>
        )
    }
}

export default FirstComponent;