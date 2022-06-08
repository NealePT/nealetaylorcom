import EducationCard from "./EducationCard"

export default function Education(props) {
  return (
    <div id="education" className="education">
      <div className="wrapper">
        <h3>
          Education
        </h3>
        <div className="aboutCards">
        <EducationCard
          type={"Queen's University"}
          icon={<img src="../../assets/QueensLogo_colour.png" alt="Profile Pic" />}
          description={"Bachelor of Arts (Honours)"}
        />
        <EducationCard
          type={"Lighthouse Labs"}
          icon={<i className="fa-solid fa-briefcase"></i>}
          description={"Diploma Full-Stack Web Development"}
        />
      </div>
      </div>
    </div>
  )
}