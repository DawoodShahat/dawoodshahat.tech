import React from "react"
import "./projectcard.css"
import GithubLogo from "../assets/github-logo.svg"

const ProjectCard = ({ title, description, projectScreenshot, links = {} }) => {
  const { github, live } = links
  return (
    <div className="card">
      <h3 className="card__title">{title}</h3>
      <img
        className="card__image"
        src={projectScreenshot}
        alt="project write ideas"
      />
      <p className="card__description">{description}</p>
      <div className="card__links">
        <a className="card__link" href={github}>
          <img src={GithubLogo} alt="github" />
        </a>
        <a className="card__link" href={live}>
          Live
        </a>
      </div>
    </div>
  )
}

export default ProjectCard
