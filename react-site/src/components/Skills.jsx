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
            <h5 className={`skill-type ${props.skill==="Frameworks" && 'skill-type-selected'}`} onClick={(e) => {
              props.setSkill("Frameworks")
            }}>Frameworks</h5>
            <h5 className={`skill-type ${props.skill==="DevTools" && 'skill-type-selected'}`} onClick={(e) => {
              props.setSkill("DevTools")
            }}>Dev Tools</h5>
            <h5 className={`skill-type ${props.skill==="SoftSkills" && 'skill-type-selected'}`} onClick={(e) => {
              props.setSkill("SoftSkills")
            }}>Soft Skills</h5>
          </aside>
          <article>
            {props.skill === "FrontEnd" && 
            <div>
              <ul>
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
                <li>Docker</li>
                <li>Rails</li>
              </ul>
            </div>}
            {props.skill === "Frameworks" && 
            <div>
              <ul>
                <li>jQuery</li>
                <li>MySQL</li>
                <li>PostgreSQL</li>
                <li>MaterialUI</li>
                <li>Bootstrap</li>
                <li>Kubernetes</li>
              </ul>
            </div>}
            {props.skill === "DevTools" && 
            <div>
              <ul>
                <li>Git</li>
                <li>Github</li>
                <li>Google Cloud</li>
                <li>Agile Development</li>
                <li>React Testing Library</li>
                <li>Mocha/Chai</li>
                <li>Jest</li>
                <li>Storybook</li>
                <li>Cypress</li>
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