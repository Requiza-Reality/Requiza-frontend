import logo from './logo.svg';
import './App.css';
import RoutePages from './RoutePages';
import {BrowserRouter,Routes,Route} from "react-router-dom"

import Home from "./Home"
import Project from "./Project"
import AboutUs from "./AboutUs"

function App() {
  return (
   <Routes>
     <Route path="/" element={ <Home/> }></Route>
     <Route  path="/projects/:projectId" element={<Project/>}></Route>
     <Route  path="/aboutus" element={<AboutUs/>}></Route>


   </Routes>
  );
}

export default App;
