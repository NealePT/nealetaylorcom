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
          icon={<img src="../../assets/queenslogowhite.jpg" alt="Queen's University Logo" />}
          description={"Bachelor of Arts (Honours)"}
        />
        <EducationCard
          type={"Lighthouse Labs"}
          icon={<img className="lighthouselogo" src="../../assets/lighthouseLogo.jpeg" alt="Lighthouse Labs Logo" />}
          description={"Diploma- Full-Stack Web Development"}
        />
      </div>
      </div>
    </div>
  )
}