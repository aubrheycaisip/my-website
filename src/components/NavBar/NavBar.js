import React from "react";
import './NavBar.css';
import {NavItems} from './NavItems.js';
import {NavLink as Link} from 'react-router-dom';

class NavBar extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            status: "top",
            clicked:false
        };
    }
    componentDidMount(){
        this.listener = document.addEventListener('scroll', e => {
            var scrolled = document.scrollingElement.scrollTop;
            var docWidth = window.innerWidth;
            console.log(scrolled);
            console.log(docWidth);
            if (scrolled >= 50 && docWidth > 960) {
                if (this.state.status !== "notTop") {
                  this.setState({ status: "notTop" });
                }
              } else {
                if (this.state.status !== "top") {
                  this.setState({ status: "top" });
                }
              }
        })
    }
    
    handleClick = () =>{
        this.setState({clicked: ! this.state.clicked})
    }

    render(){
        return(
            <div className={this.state.status === "top" ? "container-nav" : "container-nav active"}>
                <div className="menu-icon" onClick={this.handleClick}>
                    <i className={this.state.clicked ?  'fas fa-times' : 'fas fa-bars'}></i>
                </div>
                <ul className={this.state.clicked ?  'nav-items active' : 'nav-items'}>
                    {NavItems.map((item,index)=>{
                        return(
                            <li key={index}>
                                <Link exact className="item-list" to={item.url} activeClassName="item-list active">{item.name}</Link>
                            </li>
                        )
                    })}
                </ul>
            </div>
        );
    }
}
export default NavBar;