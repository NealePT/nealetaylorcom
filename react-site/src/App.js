import Header from './components/Header';
import About from './components/About';
import Skills from './components/Skills';
import Footer from './components/Footer';
import { useState } from 'react';
import './App.css';
import './components/LinkBar.css'
import './components/Header.css'
import './components/About.css'
import './components/Skills.css'

function App() {
  const [linkClick, setLinkClick] = useState(true);

  return (
    <div className="App">
      <Header 
        linkClick={linkClick}
        setLinkClick={setLinkClick}
      />
      <About />
      <Skills />
      <Footer />
    </div>
  );
}

export default App;
