import React from "react"
import "./projectcard.css"

const List = ({ list }) => (
  <ul className="list">
    {list.map((item, index) => (
      <li key={index} className="list__item">
        {item}
      </li>
    ))}
  </ul>
)

const ProjectCard = ({ title, description, techStack, link }) => {
  return (
    <div className="card">
      <h3 className="card__title">{title}</h3>
      <p className="card__description">{description}</p>
      <List list={techStack} />
      <a className="card__link" href="">
        Github
      </a>
      <a className="card__link" href="">
        Live
      </a>
    </div>
  )
}

export default ProjectCard
