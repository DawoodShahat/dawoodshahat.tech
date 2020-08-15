import React, { useState, useEffect } from "react"
import Sun from "../assets/sun.svg"
import Moon from "../assets/moon.svg"
import useDidMount from "../hooks/useDidMount"

const Toggle = () => {
  const [toggleDarkMode, setToggleDarkMode] = useState(() => {
    if (localStorage.getItem("toggled") == null) {
      return false
    }
    const isDarkMode = JSON.parse(localStorage.getItem("toggled"))
    if (isDarkMode) {
      document.querySelector("body").classList.add("dark")
    }
    return isDarkMode
  })

  const _toggleDarkMode = () => {
    setToggleDarkMode(!toggleDarkMode)
  }

  const isMounted = useDidMount()

  useEffect(() => {
    // after initial render
    if (!isMounted) {
      console.log("after initial render")
      localStorage.setItem("toggled", toggleDarkMode)
      document.querySelector("body").classList.toggle("dark")
    }
  }, [toggleDarkMode])

  return (
    <button
      className={`toggle-btn ${toggleDarkMode ? "switch" : ""}`}
      aria-label="switch between dark mode and light mode"
      onClick={_toggleDarkMode}
    >
      <img className="sun-icon" src={Sun} alt="sun icon" />
      <img className="moon-icon" src={Moon} alt="moon icon" />
    </button>
  )
}

export default Toggle
