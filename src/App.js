import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../src/Assets/CSS/Custom.css";
import Projects from "./Pages/Projects";
import {Route, Routes} from "react-router-dom";
import Home from "./Pages/Home";
import ProjectDetails from "./Pages/ProjectDetails";
import Skill from "./Pages/Skill";
import About from "./Pages/About";
import Resume from "./Pages/Resume";

function App() {

  return (
   <Routes>
       <Route path="/" element={<Home/>}/>
       <Route path="/about" element={<About/>}/>
       <Route path="/skills" element={<Skill/>}/>
       <Route path="/projects" element={ <Projects/>}/>
       <Route path="/resume" element={ <Resume/>}/>
       <Route path="/projects/:projectName" element={<ProjectDetails />} />
       <Route path="*" element={<Home />} />
   </Routes>
  );
}

export default App;
