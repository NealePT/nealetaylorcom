export default function Projects(props) {
  return (
    <div id="projects" className="projects">
      <div className="wrapper">
        <h3>
          Projects
        </h3>
        <div class="carouselWrap">
          <section id="section1">
            <a href="#section3" class="arrow__btn">‹</a>
            <div class="item">
            <img src="../../assets/simpliScreenshot.png" alt="Simpli Screenshot"  />
          </div>
            <div class="item">
            <img src="../../assets/resourceHavenScreenshot.png" alt="Resource Haven Screenshot"  />
          </div>
            <a href="#section2" class="arrow__btn">›</a>
          </section>



          <section id="section2">
            <a href="#section1" class="arrow__btn">‹</a>
            <div class="item">
            <img src="../../assets/schedulerScreenshot.png" alt="Scheduler Screenshot"  />
          </div>
            <div class="item">
            <img src="../../assets/jungleScreenshot.png" alt="Jungle Screenshot"  />
          </div>



            <a href="#section3" class="arrow__btn">›</a>
          </section>
          <section id="section3">
            <a href="#section2" class="arrow__btn">‹</a>
            <div class="item">
            <img src="../../assets/tweeterScreenshot.png" alt="Tweeter Screenshot"  />
          </div>
            <div class="item">
            <img src="../../assets/tinyUrlScreenshot.png" alt="TinyURL Screenshot"  />
          </div>
            <a href="#section1" class="arrow__btn">›</a>
          </section>
        </div>
      </div>
    </div>
  )
}