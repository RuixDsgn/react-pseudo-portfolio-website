import React from 'react'

const Header = ({isDarkMode, setIsDarkMode}) => {

const toggleDarkMode = () => {
  setIsDarkMode(!isDarkMode)
}
  return (
    <div>
        <header className="App-header">
            <div>
                    <h2>Welcome to my Portfolio Website 👋🏻</h2>
            </div>
            <div>
                <nav id="navbar">
                    <a href="#home">Home</a>
                    <a href="#about">About</a>
                    <a href="#projects">Projects</a>
                    <a href="#contact">Contact</a>
                </nav>
                <button id="toggle-btn" onClick={toggleDarkMode}>{isDarkMode ? "Light Mode" : "Dark Mode"}</button>
            </div>
      </header>
    </div>
  )
}

export default Header