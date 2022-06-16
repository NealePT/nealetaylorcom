export default function LinkBar(props) {
  const handleClick = () => {
    return (
      <span className="linkContainer">
      {props.linkClick 
        ?
        <div className="slide-out">
        <nav className="topnav">
          <ul className="linkButtons">
            <li onClick={(e) => {
              props.setLinkClick(false)
            }}><a className="clickOff"><i className="fa-solid fa-angles-right"></i></a></li>
            <li><a href="mailto:nealeptaylor@gmail.com"><i className="fa-solid fa-square-envelope"></i></a></li>
            <li><a href="https://www.linkedin.com/in/nealeptaylor/"><i className="fa-brands fa-linkedin"></i></a></li>
            <li><a href="https://github.com/NealePT"><i className="fa-brands fa-github-square"></i></a></li>
            <li><a href="https://www.instagram.com/nealeptaylor/"><i className="fa-brands fa-instagram-square"></i></a></li>
          </ul>
        </nav>
        </div> 
      : 
        <div className="arrowButton" onClick={(e) => {
          props.setLinkClick(true)
        }}>
          <a className="click">
            <i className="fa-solid fa-angles-left"></i>
          </a>
        </div>
      }
      </span>
    )
  }


  return (
    handleClick()
  )
}