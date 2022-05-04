export default function Header(props) {
  return (
    <header>
    <div className="wrapper">
      <div className="slide-out">
        <nav className="topnav">
          <ul className="linkButtons">
            <li><a className="clickOff"><i className="fa-solid fa-angles-right"></i></a></li>
            <li><a href="https://www.linkedin.com/in/nealeptaylor/"><i className="fa-brands fa-linkedin"></i></a></li>
            <li><a href="https://github.com/NealePT"><i className="fa-brands fa-github-square"></i></a></li>
            <li><a href="https://www.instagram.com/nealeptaylor/"><i className="fa-brands fa-instagram-square"></i></a></li>
            <li><a href="mailto:nealeptaylor@gmail.com"><i className="fa-solid fa-square-envelope"></i></a></li>
          </ul>
        </nav>
      </div>
      <div className="arrowButton">
        <a className="click">
          <i className="fa-solid fa-angles-left"></i>
        </a>
      </div>
      <div className="titleCard">
        <h1>
          Neale Taylor
        </h1>
        <h2>
          Full-Stack Web Developer
        </h2>
      </div>
      <div className="construction">
        <p>
          This website is under construction.
          Feel free to contact me at the links above.
        </p>
      </div>
      <div className="resume">
        <a href="./assets/NealeTaylorResume.pdf" target="_blank" className= "resumeClick">My Resume</a>
      </div>
    </div>
  </header>
  )
};