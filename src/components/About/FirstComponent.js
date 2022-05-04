import React from "react";
import DpImage from "../../images/dpimage.png";

class FirstComponent extends React.Component {
    render() {
        return (
            <div className='first-component'>
                <div>
                    <p id='pwd'>Programmer & Web Developer</p>
                    <p id='pedDesc'>
                        I build and develop beautiful things, and I love what I
                        do.
                    </p>
                </div>
                <img src={DpImage} alt='Aubrhey Caisip' />
            </div>
        );
    }
}

export default FirstComponent;
