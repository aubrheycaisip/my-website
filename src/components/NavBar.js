import React from "react";

class NavBar extends React.Component{
    render(){
        const navStyle = {
            "position":"fixed",
            "width": "100vw",
            zIndex:"2"
        }
        const listStyle = {
            "listStyleType":"none",
            "float": "right",
            "display": "flex",
            "marginRight": "50px",
            "fontWeight": "bold"
        }
        const listContentStyle = {
            "margin": "16px 25px 16px"
        }
        return(
            <div style={navStyle}>
                <ul style={listStyle}>
                    <li style={listContentStyle}>About</li>
                    <li style={listContentStyle}>Work</li>
                    <li style={listContentStyle}>Contact</li>
                </ul>
            </div>
        );
    }
}
export default NavBar;