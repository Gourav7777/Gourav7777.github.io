import logo from './logo.svg';
import './App.css';
import './CSS/Navbar.css'
import "./CSS/Home.css"
import Navbar from './Components/Navbar';
import AboutMe from './Components/AboutMe';
import Skills from './Components/Skills';
import Projects from './Components/Projects';
import Aboutxtra from './Components/Aboutxtra';
import Contact from './Components/Contact';
import Home from './Components/Home';
import Skillsxtra from './Components/Skillsxtra';
import Github from './Components/Github';
import Githubxtra from './Components/Githubxtra';
import Projectsxtra from "./Components/Projectsxtra"
import Contactxtra from './Components/Contactxtra';
import About from "./Components/About"
function App() {
  return (
    <div className="App">
      <Navbar/>
      <hr />
      <Home></Home>
      <br />
      
      {/* <Aboutxtra></Aboutxtra> */}
      {/* <AboutMe></AboutMe> */}
      <About></About>
      <Skillsxtra></Skillsxtra>
      <Skills></Skills>
      
      
      
      <Githubxtra></Githubxtra>
      <Github></Github>
      <Projectsxtra></Projectsxtra>
      <Projects></Projects>
      <Contactxtra></Contactxtra>
      <Contact></Contact> 
    </div>
  );
}

export default App;
