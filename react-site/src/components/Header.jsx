import LinkBar from "./LinkBar"

export default function Header(props) {
  return (
    <header id="home">
    <LinkBar 
      linkClick={props.linkClick}
      setLinkClick={props.setLinkClick}
    />
    <nav class="headNav">
      <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#education">Education</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#experience">Experience</a></li>
          <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
    <div className="wrapper">
      <div className="headerInfo">
        <div className="titleCard">
          <h1>
            Neale Taylor
          </h1>
          <h2>
            Full-Stack Developer
          </h2>
        </div>
        <div className="resume">
          <a href="./assets/NealeTaylorResume.pdf" target="_blank" className= "resumeClick">My Resume</a>
        </div>
      </div>
    </div>
    </header>
  )
};