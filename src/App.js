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
function App() {
  return (
    <div className="App">
      <Navbar/>
      <hr />
      <Home></Home>
      <br />
      {/* <br/> */}
      <Aboutxtra></Aboutxtra>
      <AboutMe></AboutMe>
      {
      /*
      
     <Skills></Skills>
      <Projects></Projects>
      <Contact></Contact> */}
    </div>
  );
}

export default App;
