export default function AboutCard(props) {
  <div className="card">
    <h5>
      {props.type}
    </h5>
    <p>
      {props.icon}
    </p>
    <p>
      {props.description}
    </p>
  </div>
}