import AboutCard from "./AboutCard"

export default function About(props) {
  return (
    <div id="about" className="about">
      <div className="wrapper">
        <h3>
          About Me
        </h3>
        <div className="aboutFlex">
          <div className="profilepic">
            <img src="../../assets/profilePic.jpg" alt="Profile Pic" />
          </div>
          <div className="aboutDescription">
            <div className="aboutCards">
              <AboutCard 
                type={"Education"}
                icon={<i className="fa-solid fa-graduation-cap"></i>}
                description={"Lighthouse Labs"}
              />
              <AboutCard 
                type={"Experience"}
                icon={<i className="fa-solid fa-briefcase"></i>}
                description={"1 Year"}
              />
              <AboutCard 
                type={"Projects"}
                icon={<i className="fa-solid fa-folder-closed"></i>}
                description={"Github"}
              />
            </div>
            <p className="aboutme">
            I am a Web Developer adept in front-end and back-end solutions. I've worked with and am proficient in an assortment of technologies including Javascript, React, HTML/CSS, SQL and more. I am also able to effectively self-manage during independent work as well as collaborate on projects and lead teams to complete tasks.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
} 