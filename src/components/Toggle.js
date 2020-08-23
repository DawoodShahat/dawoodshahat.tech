import React, { useState, useEffect } from "react"
import Sun from "../assets/sun.svg"
import Moon from "../assets/moon.svg"
import useDidMount from "../hooks/useDidMount"

const Toggle = () => {
  const [toggleDarkMode, setToggleDarkMode] = useState(false)

  const _toggleDarkMode = () => {
    setToggleDarkMode(!toggleDarkMode)
  }

  const isMounted = useDidMount()

  // TODO: Make this a hook instead
  useEffect(() => {
    console.log("this ran")
    if (localStorage.getItem("toggled") == null) return
    const isDarkMode = JSON.parse(localStorage.getItem("toggled"))
    setToggleDarkMode(isDarkMode)
  }, [])

  useEffect(() => {
    // after initial render
    if (!isMounted) {
      console.log("2nd effect ran")
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
