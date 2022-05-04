import React from "react";
import Experiences from "../../constant/Experiences";

class ExperienceComponent extends React.Component {
    render() {
        return (
            <div className='exp-div-container'>
                <div className='exp-bg-div'>
                    <div className='exp-inner-bg'>
                        <p
                            style={{
                                fontSize: "27px",
                                fontWeight: "bold",
                            }}
                        >
                            Work Experience
                        </p>
                        <p>
                            Workplace have a huge impact in developing one's
                            career. Experience and Knowledge gain from company,
                            business or corporation can be assets or become
                            liabilities depending on how you will use it. Here
                            is my previous company.
                        </p>
                    </div>
                </div>
                <div className='exp-div'>
                    <Experiences />
                </div>
            </div>
        );
    }
}
export default ExperienceComponent;
