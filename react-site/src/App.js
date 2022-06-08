import Header from './components/Header';
import About from './components/About';
import Skills from './components/Skills';
import Education from './components/Education';
import Footer from './components/Footer';
import { useState } from 'react';
import './App.css';
import './components/LinkBar.css'
import './components/Header.css'
import './components/About.css'
import './components/Skills.css'
import './components/Education.css'
import './components/Footer.css'

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
      <Skills 
        skill={skill}
        setSkill={setSkill}
      />
      <Education />
      <Footer />
    </div>
  );
}

export default App;
