import LinkBar from "./LinkBar"

export default function Header(props) {
  return (
    <header id="home">
    <LinkBar 
      linkClick={props.linkClick}
      setLinkClick={props.setLinkClick}
    />
    <div className="wrapper">
      <div className="titleCard">
        <h1>
          Neale Taylor
        </h1>
        <h2>
          Full-Stack Web Developer
        </h2>
      </div>
      {/* <div className="construction">
        <p>
          This website is under construction.
          Feel free to contact me at the links above.
        </p>
      </div> */}
      <div className="resume">
        <a href="./assets/NealeTaylorResume.pdf" target="_blank" className= "resumeClick">My Resume</a>
      </div>
    </div>
    </header>
  )
};