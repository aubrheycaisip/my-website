import React from "react";
import Skills from "../../constant/Skills.js";

class SkillComponent extends React.Component {
    render() {
        return (
            <div className='skill-component'>
                <div className='skill-component-bg'>
                    <div>
                        <p id='nameP'>Hi I'm Aubrhey. Nice to meet you.</p>
                        <p>
                            I believe in my field learning never stop. To be
                            able to keep up with ever-growing technology
                            constantly learning new things is necessary. Here
                            are some language and framework I learn in my
                            previous work experience.
                        </p>
                    </div>
                </div>
                <div className='skill-second-component'>
                    <Skills />
                </div>
            </div>
        );
    }
}
export default SkillComponent;
