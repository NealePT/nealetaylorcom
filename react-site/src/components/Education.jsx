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
          icon={<i className="fa-solid fa-graduation-cap"></i>}
          description={"Bachelor of Arts (Honours)"}
        />
        <EducationCard
          type={"Experience"}
          icon={<i className="fa-solid fa-briefcase"></i>}
          description={"1 Year"}
        />
      </div>
      </div>
    </div>
  )
}