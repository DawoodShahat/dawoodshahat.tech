import React from "react"
import Layout from "../components/Layout"
import Profile from "../assets/profile.png"

export default function Home() {
  return (
    <Layout>
      <div className="container about-me">
        <img className="profile-img" src={Profile} />
        <p className="about-desc">
          I’m an aspiring Software Developer, technology enthusiast and a final
          year Software Engineering student. In the past I have worked on many
          side projects using C and Java as tools. Now I’m more towards learning
          web technologies and dreams of becoming a full stack web developer. In
          my spare time I read on internet about new technologies and love
          reading about personal development.
        </p>
      </div>
      <div className="container">
        <ul className="socials">
          <li className="social__item">
            <a href="" className="social__link">
              github
            </a>
          </li>
          <li className="social__item">
            <a href="" className="social__link">
              twitter
            </a>
          </li>
          <li className="social__item">
            <a href="" className="social__link">
              instagram
            </a>
          </li>
        </ul>
      </div>
    </Layout>
  )
}
