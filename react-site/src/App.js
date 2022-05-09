import Header from './components/Header';
import About from './components/About';
import { useState } from 'react';
import './App.css';
import './components/LinkBar.css'
import './components/Header.css'
import './components/About.css'

function App() {
  const [linkClick, setLinkClick] = useState(true);

  return (
    <div className="App">
      <Header 
        linkClick={linkClick}
        setLinkClick={setLinkClick}
      />
      <About />
    </div>
  );
}

export default App;
