export default function Education(props) {
  return (
  <div className="card">
    <p>
      {props.icon}
    </p>
    <h5>
      {props.type}
    </h5>
    <p>
      {props.description}
    </p>
  </div>
  )
}