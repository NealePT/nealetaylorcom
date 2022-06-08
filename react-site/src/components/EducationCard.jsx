export default function EducationCard(props) {
  return (
  <div className="card">
      {props.icon}
    <h5>
      {props.type}
    </h5>
    <p>
      {props.description}
    </p>
  </div>
  )
}