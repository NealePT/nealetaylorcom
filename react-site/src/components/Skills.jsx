// import SkillsCard from "./SkillsCard"

export default function Skills(props) {
  return (
    <div id="skills" className="skills">
      <div className="wrapper">
        <h3>
          Skills
        </h3>
        <div className="skillContainer">
          <aside className="skillSidebar">
            <h5 onClick={(e) => {
              props.setSkill("FrontEnd")
            }}>Front-End</h5>
            <h5 onClick={(e) => {
              props.setSkill("BackEnd")
            }}>Back-End</h5>
            <h5 onClick={(e) => {
              props.setSkill("Testing")
            }}>Testing</h5>
          </aside>
          <span>
            {props.skill === "FrontEnd" && 
            <div>
              hi
            </div>}
            {props.skill === "BackEnd" && 
            <div>
              sup
            </div>}
            {props.skill === "Testing" && 
            <div>
              yo
            </div>}
          </span>
        </div>
        {/* <SkillsCard /> */}
      </div>
    </div>
  )
}