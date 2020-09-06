import React from "react"
import ProjectCard from "../components/ProjectCard"

export default function Projects() {
  return (
    <div className="container projects">
      <h1 className="projects__title">Projects</h1>
      <div className="projects">
        <ProjectCard
          title="Write Ideas"
          description="This application lets you write everyday, and keeps track of it. That is also completely private, It makes you stick to your writing habit"
          techStack={["ReactJS", "NodeJS", "MongoDB", "ExpressJS"]}
          links={{
            github: "https://github.com/DawoodShahat/write-ideas",
            live: "https://arcane-cliffs-18850.herokuapp.com/",
          }}
        />
      </div>
    </div>
  )
}
