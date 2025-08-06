export default function Skills(props) {
  return (
    <div id="skills" className="skills">
      <div className="wrapper">
        <h3>
          Skills
        </h3>
        <div className="skillContainer">
          <aside className="skillSidebar">
            <h5 className={`skill-type ${props.skill==="FrontEnd" && 'skill-type-selected'}`} onClick={(e) => {
              props.setSkill("FrontEnd")
            }}>Front-End</h5>
            <h5 className={`skill-type ${props.skill==="BackEnd" && 'skill-type-selected'}`} onClick={(e) => {
              props.setSkill("BackEnd")
            }}>Back-End</h5>
            <h5 className={`skill-type ${props.skill==="Databases" && 'skill-type-selected'}`} onClick={(e) => {
              props.setSkill("Databases")
            }}>Databases</h5>
            <h5 className={`skill-type ${props.skill==="DevOps" && 'skill-type-selected'}`} onClick={(e) => {
              props.setSkill("DevOps")
            }}>DevOps & Tools</h5>
            <h5 className={`skill-type ${props.skill==="SoftSkills" && 'skill-type-selected'}`} onClick={(e) => {
              props.setSkill("SoftSkills")
            }}>Soft Skills</h5>
          </aside>
          <article>
            {props.skill === "FrontEnd" && 
            <div>
              <ul>
                <li>TypeScript</li>
                <li>Angular</li>
                <li>JavaScript</li>
                <li>React</li>
                <li>HTML</li>
                <li>CSS</li>
                <li>SASS/SCSS</li>
                <li>Ruby</li>
                <li>Jquery</li>
              </ul>
            </div>}
            {props.skill === "BackEnd" && 
            <div>
              <ul>
                <li>Node.js</li>
                <li>Express</li>
                <li>SQL</li>
                <li>Python</li>
                <li>Rails</li>
              </ul>
            </div>}
            {props.skill === "Databases" && 
            <div>
              <ul>
                <li>MongoDB</li>
                <li>MySQL</li>
                <li>PostgreSQL</li>
              </ul>
            </div>}
            {props.skill === "DevOps" && 
            <div>
              <ul>
                <li>Git</li>
                <li>Docker</li>
                <li>CI/CD</li>
                <li>Kubernetes</li>
                <li>Google Cloud</li>
                <li>Agile Development</li>
                <li>Figma</li>
              </ul>
            </div>}
            {props.skill === "SoftSkills" && 
            <div>
              <ul>
                <li>Communication</li>
                <li>Teamwork</li>
                <li>Problem Solving</li>
                <li>Critical Thinking</li>
                <li>Leadership</li>
                <li>Creativity</li>
              </ul>
            </div>}
          </article>
        </div>
      </div>
    </div>
  )
}