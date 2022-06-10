export default function Projects(props) {
  return (
    <div id="projects" className="projects">
      <div className="wrapper">
        <h3>
          Projects
        </h3>
        <div class="carouselWrap">
        <div class="item">
          <img src="../../assets/simpliScreenshot.png" alt="Simpli Screenshot"  />
          <h5>Simpli</h5>
          <h6>Simpli is a team-based project tracking productivity app. Projects are mapped through a list of deliverables, each containing it's own list of tasks.</h6>
        </div>
        <div class="item">
          <img src="../../assets/resourceHavenScreenshot.png" alt="Resource Haven Screenshot"  />
          <h5>Resource Haven</h5>
          <h6>Resource Haven allows learners to save learning resources (i.e. urls) like tutorials, blogs and videos in a central place that is publicly available to any user.</h6>
          <div className="gitButton">
            <i class="fa-brands fa-github"></i>
            <p>Github</p>
          </div>
        </div>
        <div class="item">
          <img src="../../assets/schedulerScreenshot.png" alt="Scheduler Screenshot"  />
          <h5>Interview Scheduler</h5>
          <h6>Interview Scheduler is a Single Page Application built for creating and tracking student interviews.</h6>
        </div>
        <div class="item">
          <img src="../../assets/jungleScreenshot.png" alt="Jungle Screenshot"  />
          <h5>Jungle</h5>
          <h6>A mini e-commerce application built with Rails 4.2 for purposes of learning Rails.</h6>
        </div>
        <div class="item">
          <img src="../../assets/tweeterScreenshot.png" alt="Tweeter Screenshot"  />
          <h5>Tweeter</h5>
          <h6>Single-page Twitter clone where user can post and interact with tweets.</h6>
        </div>
        <div class="item">
          <img src="../../assets/tinyUrlScreenshot.png" alt="TinyURL Screenshot"  />
          <h5>TinyURL</h5>
          <h6>TinyApp is a full stack web application that allows users to shorten long URLs (à la bit.ly).</h6>
        </div>
        </div>
      </div>
    </div>
  )
}