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
          <article>
            {props.skill === "FrontEnd" && 
            <div>
              <p>hi</p>
            </div>}
            {props.skill === "BackEnd" && 
            <div>
              <p>sup</p>
            </div>}
            {props.skill === "Testing" && 
            <div>
              <p>yo</p>
            </div>}
          </article>
        </div>
        {/* <SkillsCard /> */}
      </div>
    </div>
  )
}