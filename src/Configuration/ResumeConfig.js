import profile from "../Assets/Images/sekul22.png";

const resumeInfo = {
    contact:[
        {id:0, name:"Portfolio", value:"https://sekul-hassan.github.io/portfoliio"},
        {id:1, name:"Phone", value:"01824340471"},
        {id:2, name:"Email", value:"sekulhassan3031@gmail.com"},
        {id:3, name:"Github", value:"https://github.com/sekul-hassan"},
        {id:4, name:"LinkedIn", value:"https://bd.linkedin.com/in/sekul-hassan"},
        {id:5, name:"Address", value:"JU, Saver, Dhaka"},
    ],
    education:[
        {id:1, degree:"2019 H.S.C", institute:"Netrakona Govt. College"},
        {id:2, degree:"2024 B.sc in CSE", institute:"Jahangirnagar University"},
    ],
    expertise:[
        {id:1, name:"Problem Solving , DSA"},
        {id:3, name:"Git & Github, CI/CD, Docker"},
        {id:4, name:"Managing Cloud Server"},
        {id:5, name:"C, C++, Java, Javascript"},
        {id:6, name:"DBMS MySql"},
        {id:7, name:"bKash , Stripe API integration"},
        {id:8, name:"HTML, CSS, Bootstrap, Javascript"},
        {id:9, name:"React , Spring Boot , NodeJs"},
        {id:10, name:"ORM ( Hibernate , Sequelize )"},
        {id:10, name:"Unit testing with Jest & Mocking."},
    ],
    mySelf:{
        photo:profile,
        name:"SEKUL HASSAN",
        designation:"Software Engineer",
        description:"Hi, I am Sekul Hassan, an undergraduate student in the Department of CSE at Jahangirnagar University. I have experience developing the NCPC 2023 registration website."
    },
    projects:[
        {id:1, name:"NCPC", description:"Using this website, the NCPC 2023 registration was held, with over 1000+ teams registered. I managed and maintained it on DigitalOcean cloud.",frontendLink:"https://github.com/sekul-hassan/ncpcfrontend",backendLink:"https://github.com/sekul-hassan/ncpcbackend"},
        {id:2, name:"Mess Management", description:"This is a mess management web platform, here any one can manage his mess including Mess Member, Meal Rate, Daily Bazar Bills etc.", frontendLink:" https://github.com/sekul-hassan/mess-managemenet", backendLink:" https://github.com/sekul-hassan/Mess"},
        {id:3, name:"Store Management", description:"The Store Management System is a second-year project developed to streamline the management of an online store.", frontendLink:"https://github.com/sekul-hassan/StoreManagement",},
        {id:4, name:"Educational Consultant", description:"The Educational Consultant Web Application is a web-based platform designed to connect students with educational consultants, helping them make informed decisions regarding their academic journeys.", frontendLink:"https://github.com/sekul-hassan/Recursive_Education"},
        {id:5, name:"Batch Management", description:"The Batch Management System is a full-stack web application designed to streamline the management of academic batches, semesters, courses, and student data.", frontendLink:"https://github.com/sekul-hassan/Batch_management",backendLink: "https://github.com/sekul-hassan/batch_backend"},
    ],
    educationalQualifications:[
        {id:1, degree:"S.S.C", institute: "Bekhoir Hati N.K High School",passingYear: "2017",result: "4.95"},
        {id:1, degree:"H.S.C", institute: "Netrakona Government College",passingYear: "2019",result: "4.33"},
        {id:1, degree:"Bsc", institute: "Jahangirnagar University",passingYear: "2025",result: "3.25 (Up to 3rd Year)"},
    ],
}

export default resumeInfo;