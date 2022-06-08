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
          type={"Education"}
          icon={<i className="fa-solid fa-graduation-cap"></i>}
          description={"Lighthouse Labs"}
        />
        <EducationCard
          type={"Experience"}
          icon={<i className="fa-solid fa-briefcase"></i>}
          description={"1 Year"}
        />
        <EducationCard
          type={"Projects"}
          icon={<i className="fa-solid fa-folder-closed"></i>}
          description={"Github"}
        />
      </div>
      </div>
    </div>
  )
}