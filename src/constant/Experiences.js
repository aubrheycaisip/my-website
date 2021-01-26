import bliimoLogo from '../images/bliimoLogo.jpg';

function Experience(){
    const experieces = [
        {
            id:1,
            company:"Bliimo Tech.",
            logo:bliimoLogo,
            address:"10F Strata 100, Ortigas Center, Pasig",
            employmentDate:"May 2019 - September 2020",
            position:"Associate Developer"
        }
    ]
    const expListStyle ={
        "backgroundColor": "white", 
        "borderRadius": "10px",
        "border": "solid 1px #E6ECF8",
        "boxShadow": "1px 2px 1px #E6ECEA",
        "width": "25%",
        "margin":"6px",
        padding:"12px",
        fontWeight:"bold",
        minWidth:"236px"
    }
    return(
        experieces.map((experiece)=>
            <div style={expListStyle} key={experiece.id}>
                <img style={{
                    height: "50%",
                    width: "50%",
                    objectFit: "scale-down",
                    margin: "20px auto"
                }} src={experiece.logo} alt={experiece.company}/>
                <p style={{"fontSize": "25px", margin: "auto"}}>{experiece.company}</p>
                <p style={{"fontSize": "14px", margin: "auto"}}>{experiece.address}</p>
                <p style={{"fontSize": "14px", margin: "auto"}}>{experiece.employmentDate}</p>
                <p style={{"fontSize": "19px"}}>{experiece.position}</p>
            </div>
        )
    )
}
export default Experience