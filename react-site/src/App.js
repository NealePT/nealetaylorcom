import Header from './components/Header';
import About from './components/About';
import Education from './components/Education';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Work from './components/Work';
import { useState } from 'react';
import './App.css';
import './components/LinkBar.css'
import './components/Header.css'
import './components/About.css'
import './components/Education.css'
import './components/Skills.css'
import './components/Projects.scss'
import './components/Contact.scss'
import './components/Footer.css'
import './components/Work.css'

function App() {
  const [linkClick, setLinkClick] = useState(true);
  const [skill, setSkill] = useState("FrontEnd");
  return (
    <div className="App">
      <Header 
        linkClick={linkClick}
        setLinkClick={setLinkClick}
      />
      <About />
      <Education />
      <Skills 
        skill={skill}
        setSkill={setSkill}
      />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
