import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../src/Assets/CSS/Custom.css";
import Projects from "./Pages/Projects";
import {Route, Routes} from "react-router-dom";
import Home from "./Pages/Home";

function App() {
  return (
   <Routes>
       <Route path="/" element={<Home/>}/>
       <Route path="projects" element={ <Projects/>}/>
   </Routes>
  );
}

export default App;
