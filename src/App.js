import logo from './logo.svg';
import './App.css';
import Home from '../src/components/Home/Home'
import NavBar from './components/Nav-bar/NavBar';
import { FaGithub, FaHtml5, FaCss3Alt, FaJs, FaPython } from 'react-icons/fa';
import About from './components/About/About';
import Projects from './components/projects/Projects';
import Contect from './components/Contect/Contect';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
function App() {
  return (
  
 <>

    
          <Home />
          <About />
      
          <Projects />
       
          <Contect />
       
 </>

    
  );
}

export default App;
