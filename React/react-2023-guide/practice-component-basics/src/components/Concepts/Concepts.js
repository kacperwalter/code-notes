import './Concepts.css'

const Concepts = ({ data }) => {
  return (
    <ul id="concepts">
      {data.map(element => (
        <li className="concept">
          <img src={element.image} alt="TODO: TITLE" />
          <h2>{element.title}</h2>
          <p>{element.description}</p>
        </li> 
      ))}
    </ul>
  )
}

export default Concepts