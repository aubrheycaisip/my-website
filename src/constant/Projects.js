import aoishipLogo from '../images/aoiship-logo.png'
import brandzoneLogo from '../images/brandzone-logo.png'
import mytcktLogo from '../images/mytckt-logo.png'
import skoutowlLogo from '../images/skoutowl-logo.jpg'
import tmcLogo from '../images/tmc-logo.png'
import aoishipBg from '../images/aoiship-bg.jpg'
import brandzoneBg from '../images/brandzone-bg.jpg'
import mytcktBg from '../images/mytckt-bg.jpg'
import skoutowlBg from '../images/skoutowl-bg.jpg'
import tmcBg from '../images/tmc-bg.jpg'
import tmcAdminBg from '../images/tmcAdmin-bg.jpg'

export const projects = [
    {
        id:"1",
        logo: tmcLogo,
        backgroundPic:tmcBg,
        projectName:"The Medical City - Ambulatory Web App",
        projectDescription:"The Medical City - Ambulatory Website helps customers to search for procedures and add them to their cart and book schedules for those procedures. Payment is done by paying the bills to their cashier or via credit card.",
        assignment:"Backend",
        tools:"MySql, Java, Springboot",
        work: 60
    },
    {
        id:"2",
        logo: tmcLogo,
        backgroundPic:tmcAdminBg,
        projectName:"The Medical City - Ambulatory Web Admin",
        projectDescription:"Admins use Ambulatory Web Admin to view, add, update and delete physicians, customer information, procedures, departments and schedules.",
        assignment:"Backend",
        tools:"MySql, Java, Springboot",
        work: 65
    },
    {
        id:"3",
        logo: skoutowlLogo,
        backgroundPic:skoutowlBg,
        projectName:"Skoutowl",
        projectDescription:"Skoutowl application helps clients to find talents to invite in their event, clients can also post their events in the application. Skoutowl application also helps talents find events where they can apply.",
        assignment:"Backend",
        tools:"MySql, Java, Springboot",
        work: 40
        
    },
    {
        id:"4",
        logo: aoishipLogo,
        backgroundPic:aoishipBg,
        projectName:"Aoiship Website",
        projectDescription:"Aoiship e-commerce marketplace to connect Influencers with curated fashion from Japan. Fashion from Japan are posted to Aoiship website, customers can add to cart item from there and use Influencers code to get discount form their items.",
        assignment:"Backend",
        tools:"PostgresSql, Ruby on Rails",
        work: 10
    },
    {
        id:"5",
        logo: brandzoneLogo,
        backgroundPic:brandzoneBg,
        projectName:"Brandzone Web Admin",
        projectDescription:"Administration website where admins can view list of event and user. Admins can also add and update users information, also active and deactive events or users. Admins use this website to send announcements to it's users.",
        assignment:"Backend",
        tools:"MySql, Java, Springboot",
        work: 70
        
    },
    {
        id:"6",
        logo: mytcktLogo,
        backgroundPic:mytcktBg,
        projectName:"MyTckt",
        projectDescription:"MyTckt is a web and mobile platform that empowers both event organizers and event attnedees by bringing them together to form a community.",
        assignment:"Backend",
        tools:"MySql, Java, Springboot",
        work: 10
    }
]