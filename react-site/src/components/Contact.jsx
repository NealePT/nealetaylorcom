export default function Contact(props) {
  return (
    <div id="contact" className="contact">
      <div className="wrapper">
        <h3>
          Contact Me
        </h3>
        <div className="contactLinks">
          <a className="contactLink" href="mailto:nealeptaylor@gmail.com">
            <i class="fa-solid fa-envelope"></i>
            <h5>Email</h5>
          </a>
          <a className="contactLink" href="https://www.linkedin.com/in/nealeptaylor/">
            <i className="fa-brands fa-linkedin"></i>
            <h5>LinkedIn</h5>
          </a>
        </div>
      </div>
    </div>
  )
}