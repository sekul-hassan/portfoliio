import java from "../Assets/Images/ProjectImg/Java.jpg";
import react from "../Assets/Images/ProjectImg/react.jpg";
/// Project 0
import r1 from "../Assets/Images/RecursiveEducation/recursiveeducation1.png";
import r2 from "../Assets/Images/RecursiveEducation/recursiveeducation2.png";
import r3 from "../Assets/Images/RecursiveEducation/recursiveeducation3.png";
import r4 from "../Assets/Images/RecursiveEducation/recursiveeducation4.png";
import r5 from "../Assets/Images/RecursiveEducation/recursiveeducation5.png";
import r6 from "../Assets/Images/RecursiveEducation/recursiveeducation6.png";
/// Project 1
import ncpc1 from "../Assets/Images/Ncpc/ncpc1.png"
import ncpc2 from "../Assets/Images/Ncpc/ncpc2.png"
import ncpc3 from "../Assets/Images/Ncpc/ncpc3.png"
import ncpc4 from "../Assets/Images/Ncpc/ncpc4.png"

const ncpcImageContext = require.context('../Assets/Images/Ncpc', false, /\.(png|jpe?g|gif)$/);
const ncpcImages = ncpcImageContext.keys().map(ncpcImageContext);


const messImageContext = require.context('../Assets/Images/Mess', false, /\.(png|jpe?g|gif)$/);
const messImages = messImageContext.keys().map(messImageContext);

const storeImageContext = require.context('../Assets/Images/Store', false, /\.(png|jpe?g|gif)$/);
const storeImages = storeImageContext.keys().map(storeImageContext);

const reImageContext = require.context('../Assets/Images/RecursiveEducation', false, /\.(png|jpe?g|gif)$/);
const reImages = reImageContext.keys().map(reImageContext);


const projectData = [

    {
        id:0,
        link:"ncpc",
        title:"NCPC 2023 JU Registration Portal",
        description: "As the team leader, I developed and managed the NCPC 2023 JU Registration Website, which handled over 1,000+ team registrations, each consisting of up to 4 members. Built using React for the frontend and Spring Boot for the backend, the platform provided a seamless user experience for participants to register and manage their team details. I also spearheaded the deployment of the application on DigitalOcean, ensuring reliable performance and scalability for the event's high traffic. My responsibilities included overseeing the project lifecycle, collaborating with the development team, and ensuring the successful and smooth operation of the registration process.",
        frontEndLink: "https://github.com/sekul-hassan/ncpcfrontend",
        backendLink: "https://github.com/sekul-hassan/ncpcbackend",
        image:ncpcImages[0],
        images:ncpcImages,
    },

    {
        id:1,
        link: "mess-management",
        title:"Mess Management",
        description:"This Mess Management System is a full-stack web application designed to simplify the management of mess facilities, including meal tracking, cost management, and automatic billing for users. Built using React on the frontend, Spring Boot on the backend, Hibernate ORM for database interaction, and MySQL for persistent storage, the system ensures seamless and efficient management of meal plans and user accounts.",
        frontEndLink: "https://github.com/sekul-hassan/mess-managemenet",
        backendLink: "https://github.com/sekul-hassan/Mess",
        image:messImages[0],
        images: messImages,
    },

    {
        id:2,
        link: "store-management",
        title:"Store Management",
        description:"The Store Management System is a second-year project developed to streamline the management of an online store. Built using Java Swing for the graphical user interface (GUI) and MySQL for database management, this system automates various processes involved in running an online store. It provides a comprehensive solution for managing products, orders, and user accounts, all while offering a simple and intuitive interface for both administrators and customers.",
        frontEndLink:"https://github.com/sekul-hassan/StoreManagement",
        image:storeImages[4],
        images:storeImages,
    },

    {
        id:3,
        link:"recursive-education",
        title:"Recursive Education",
        description:"The Educational Consultant Web Application is a web-based platform designed to connect students with educational consultants, helping them make informed decisions regarding their academic journeys. Built with React.js for a responsive and interactive user interface, this system enables students to browse various educational services, book consultations, and receive tailored advice based on their academic goals. The platform aims to simplify the process of finding the right educational path with personalized consultations.",
        frontEndLink: "https://github.com/sekul-hassan/Recursive_Education",
        image:reImages[1],
        images:reImages,
    },

    {
        id:4,
        link: "ncpc",
        title:"React project",
        description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab aliquam consectetur corporis et excepturi expedita fuga labore laboriosam natus nisi non obcaecati officia praesentium quaerat, quibusdam quo recusandae soluta voluptatum.",
        projectLink:"https://recursiveeducation.com",
        gitHubLink:"https://github.com/sekul-hassan",
        image:react,
        images:[
            ncpc1,ncpc2,ncpc3,ncpc4
        ],
    },
    {
        id:5,
        link: "java-project",
        title:"Java project",
        description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab aliquam consectetur corporis et excepturi expedita fuga labore laboriosam natus nisi non obcaecati officia praesentium quaerat, quibusdam quo recusandae soluta voluptatum.",
        projectLink:"https://recursiveeducation.com",
        gitHubLink:"https://github.com/sekul-hassan",
        image:java,
        images:[
            r1,r2,r3,r4,r5,r6
        ],
    },
]
export default projectData;