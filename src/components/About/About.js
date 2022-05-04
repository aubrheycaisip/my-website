import React from "react";
import FirstComponent from "../About/FirstComponent.js";
import SkillComponent from "../About/SkillComponent.js";
import ExperienceComponent from "../About/ExperienceComponent.js";
import "./About.css";

class About extends React.Component {
    render() {
        return (
            <div>
                <FirstComponent />
                <SkillComponent />
                <ExperienceComponent />
            </div>
        );
    }
}
export default About;
