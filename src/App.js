import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../src/Assets/CSS/Custom.css";
import Projects from "./Pages/Projects";
import {Route, Routes} from "react-router-dom";
import Home from "./Pages/Home";
import ProjectDetails from "./Pages/ProjectDetails";
import Skill from "./Pages/Skill";

function App() {

  return (
   <Routes>
       <Route path="/" element={<Home/>}/>
       <Route path="/skills" element={<Skill/>}/>
       <Route path="/projects" element={ <Projects/>}/>
       <Route path="/projects/:projectName" element={<ProjectDetails />} />
       <Route path="*" element={<Home />} />
   </Routes>
  );
}

export default App;
