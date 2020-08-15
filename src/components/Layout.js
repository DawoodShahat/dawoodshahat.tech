import React, { useState } from "react"
import Helmet from "react-helmet"
import useSiteMetaData from "../hooks/use-site-metadata"
import Toggle from "./Toggle"
import Navbar from "./Navbar"
import HamburgerOpen from "../assets/hamburger-open.svg"
import { Link } from "gatsby"
import { defineCustomElements as deckDeckGoHighlightElement } from "@deckdeckgo/highlight-code/dist/loader"
deckDeckGoHighlightElement()

const Layout = ({ children }) => {
  const { title, description } = useSiteMetaData()

  const [toggleMenu, setToggleMenu] = useState(false)

  const _toggleHamburger = () => {
    setToggleMenu(!toggleMenu)
  }

  return (
    <>
      <Helmet>
        <html lang="en" />
        <title>{title}</title>
        <meta name="description" content={description}></meta>
      </Helmet>
      <header>
        <div className="container row">
          <div className="wrapper">
            <button className="hamburger-open" onClick={_toggleHamburger}>
              <img src={HamburgerOpen} alt="opens the side menu" />
            </button>
            <Toggle />
          </div>
          <Link className="branding_link" to="/">
            <h1 className="branding">Muhammad Dawood</h1>
          </Link>
          <Navbar
            handleToggleHamburger={_toggleHamburger}
            toggleMenu={toggleMenu}
          />
        </div>
      </header>
      <main>{children}</main>
    </>
  )
}

export default Layout
