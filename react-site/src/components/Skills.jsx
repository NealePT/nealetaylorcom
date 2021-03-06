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
            <h5 className={`skill-type ${props.skill==="Testing" && 'skill-type-selected'}`} onClick={(e) => {
              props.setSkill("Testing")
            }}>Testing</h5>
          </aside>
          <article>
            {props.skill === "FrontEnd" && 
            <div>
              <ul>
                <li>JavaScript</li>
                <li>Ruby</li>
                <li>HTML</li>
                <li>CSS</li>
                <li>React</li>
                <li>EJS</li>
                <li>Jquery</li>
                <li>BootStrap</li>
                <li>Sass/SCSS</li>
                <li>MaterialUI</li>
                <li>TailwindCSS</li>
                <li>Storybook</li>
              </ul>
            </div>}
            {props.skill === "BackEnd" && 
            <div>
              <ul>
                <li>Node.js</li>
                <li>Express</li>
                <li>Ruby on Rails</li>
                <li>Git</li>
                <li>Ajax</li>
                <li>PostgreSQL</li>
                <li>MySQL</li>
              </ul>
            </div>}
            {props.skill === "Testing" && 
            <div>
              <ul>
                <li>Mocha</li>
                <li>Chai</li>
                <li>Cypress</li>
                <li>Jest</li>
              </ul>
            </div>}
          </article>
        </div>
      </div>
    </div>
  )
}