export default function LinkBar(props) {
  return (
    <span>
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
    </span>
  )
}