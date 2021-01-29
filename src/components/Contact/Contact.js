import React from "react";
import './Contact.css';
import facebookLogo from '../../images/facebookLogo.png';
import linkedinLogo from '../../images/linkedinLogo.png';

class Contact extends React.Component{
    render(){
        return(
            <div className='contact-div'>
                <div className='inner-bar-div'></div>
                <div className='content-div'>
                    <h1>Contact Me</h1>
                    <p>aubrehycaisip@gmail.com</p>
                    <p>+63 (922) 555 6732</p>
                    <div>
                        <a href='https://www.facebook.com/aubs.caisip'>
                            <img src={facebookLogo} style={{
                                width: "5%",
                                margin: 'auto 10px auto',
                                minWidth: '25.172px'
                                }} alt="Facebook"/>
                        </a>
                        <a href='https://www.linkedin.com/in/aubrey-caisip-1a4747138'>
                            <img src={linkedinLogo} style={{
                                width: "5%",
                                margin: 'auto 10px auto',
                                minWidth: '25.172px'
                                }} alt="Linkedin"/>
                        </a>
                    </div>
                </div>
            </div>
        )
    }
}
export default Contact