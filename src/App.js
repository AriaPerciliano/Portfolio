import logo from './logo.svg';
import './App.css';
import Menu from './Components/Menu';
import Home from './Components/Home';
import AboutMe from './Components/AboutMe';
import Skills from './Components/Skills';
import Projects from './Components/Projects';
import Contact from './Components/ContactMe';

function App() {
  return (
    <div className="App">
      <Menu />
      <Home />
      <AboutMe />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
