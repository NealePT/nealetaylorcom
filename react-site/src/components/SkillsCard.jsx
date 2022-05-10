export default function SkillsCard(props) {
  return (
    <div className="skillcard">
      <div className="frontEndSkills">
        <h5>Front-End</h5>
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
          <li>Storybook</li>
        </ul>
      </div>
      <div className="backEndSkills">
        <h5>Back-End</h5>
        <ul>
          <li>Node.js</li>
          <li>Express</li>
          <li>Ruby on Rails</li>
          <li>Git</li>
          <li>Ajax</li>
          <li>PostgreSQL</li>
        </ul>
      </div>
      <div className="testingSkills">
        <h5>Testing</h5>
      </div>
    </div>
  )
}