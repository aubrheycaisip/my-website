import cssLogo from '../images/cssLogo.png'
import htmlLogo from '../images/htmlLogo.png'
import javaLogo from '../images/javaLogo.png'
import mysqlLogo from '../images/mysqlLogo.png'
import reactLogo from '../images/reactLogo.png'
import springbootLogo from '../images/springbootLogo.png'
import gitLogo from '../images/gitLogo.png'

function Skills(){
    const skills  = [
        {
            id: 1,
            title: 'Java',
            image: javaLogo,
            proficiency: 'Advanced'
        },
        {
            id: 2,
            title: 'MySql',
            image: mysqlLogo,
            proficiency: 'Intermediate'
        },
        {
            id: 3,
            title: 'SpringBoot',
            image: springbootLogo,
            proficiency: 'Intermediate'
        },
        {
            id: 4,
            title: 'React',
            image: reactLogo,
            proficiency: 'Novice'
        },
        {
            id: 5,
            title: 'Html',
            image: htmlLogo,
            proficiency: 'Intermediate'
        },
        {
            id: 6,
            title: 'Css',
            image: cssLogo,
            proficiency: 'Intermediate'
        },
        {
            id: 7,
            title: 'Git',
            image: gitLogo,
            proficiency: 'Intermediate'
        },
    ]
    const skillListStyle ={
        "backgroundColor": "white", 
        "borderRadius": "10px",
        "border": "solid 1px #E6ECF8",
        "boxShadow": "1px 2px 1px #E6ECEA",
        "margin":"6px",
        padding:"12px",
        fontWeight:"bold",
        width:"25%",
        height:"249px",
        minWidth:"236px"
    }
    return(
        skills.map((skill)=>
            <div style={skillListStyle} key={skill.id}>
                <img style={{
                    height: "50%",
                    width: "50%",
                    objectFit: "scale-down",
                    margin: "20px auto"
                }} src={skill.image} alt={skill.title}/>
                <p>{skill.title}</p>
            </div>
        )
    )
}
export default Skills;
