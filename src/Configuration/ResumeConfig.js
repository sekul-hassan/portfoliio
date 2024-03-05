import profile from "../Assets/Images/profile.jpg";

const resumeInfo = {
    contact:[
        {id:0, name:"Portfolio", value:"https://sekul.recursiveeducation.com"},
        {id:1, name:"Phone", value:"01824340471"},
        {id:2, name:"Email", value:"sekulhassan3031@gmail.com"},
        {id:3, name:"Github", value:"https://github.com/sekul-hassan"},
        {id:4, name:"LinkedIn", value:"https://linkedIn/in/sekul-hassan"},
        {id:5, name:"Address", value:"JU, Saver, Dhaka"},
    ],
    education:[
        {id:1, degree:"2019 H.S.C", institute:"Netrakona Govt. College"},
        {id:2, degree:"2024 B.sc in CSE", institute:"Jahangirnagar University"},
    ],
    expertise:[
        {id:1, name:"Problem Solving"},
        {id:2, name:"DSA"},
        {id:3, name:"Git & Github, CI/CD, Docker"},
        {id:4, name:"Managing Cloud Server"},
        {id:5, name:"C, C++, Java"},
        {id:6, name:"DBMS MySql"},
        {id:7, name:"bKash API integration"},
        {id:8, name:"HTML, CSS, Bootstrap, Javascript"},
        {id:9, name:"React"},
        {id:10, name:"Spring Boot"},
    ],
    mySelf:{
        photo:profile,
        name:"SEKUL HASSAN",
        designation:"Software Engineer",
        description:"Sekul Hassan is a skilled Software Engineer with a strong foundation in web development and project management. With a passion for creating efficient and user-friendly solutions, Sekul has demonstrated expertise in both academic and professional settings."
    },
    projects:[
        {id:1, name:"Recursive Education", description:"This is a learning (Academic and Software Development) platform.",liveLink:"https://recursiveeducaion.com",gitHubLink:"https://recursiveeducaion.com"},
        {id:2, name:"Mess Management", description:"This is a mess management web platform, here any one can manage his mess including Mess Member, Meal Rate, Daily Bazar Bills etc.", gitHubLink:"https://recursiveeducaion.com", liveLink:"https://recursiveeducaion.com"},
        {id:3, name:"Biye Shadi", description:"This project is developed by inspiring Matrimoni site. After creating an account in this site any one can find out his/her life partner.", gitHubLink:"https://recursiveeducaion.com", liveLink:"https://recursiveeducaion.com"},
        {id:4, name:"NCPC 2023 Registration site", description:"This site is made for registration of ncpc contestants. Main learning outcome of this project is team work and how can handle pressure.", gitHubLink:"https://recursiveeducaion.com", liveLink:"https://recursiveeducaion.com"},
        {id:5, name:"Designer", description:"Which is cloned site of a theme from there forest. It is my first practice designed website using React.", gitHubLink:"https://recursiveeducaion.com", liveLink:"https://recursiveeducaion.com"},
    ],
    references:[
        {id:1, name:"XYZ", value:"Company ABC"},
    ],
}

export default resumeInfo;