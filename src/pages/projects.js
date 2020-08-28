import React from "react"
import ProjectCard from "../components/ProjectCard"

export default function Projects() {
  return (
    <div className="container projects">
      <h1 className="projects__title">Projects</h1>
      <div className="projects">
        <ProjectCard
          title="Code Sharing Platform"
          description="A code sharing platform, that lets you share your code into a central repository"
          techStack={["Javascript", "NodeJS", "MongoDB", "ExpressJS"]}
        />
      </div>
    </div>
  )
}
