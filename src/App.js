import Todos from "./components/Todos"
import React, { useState } from 'react'
import './App.css'

function App() {
  const [lightMode, setLightMode] = useState(() => JSON.parse(window.localStorage.getItem("light-mode")))

  const handleDarkSwitch = () => {
    setLightMode(!lightMode)
  }
  return (
    <div className={lightMode ? "App" : "dark-app"}>
      <div className="container">
        <h1 className="display-1 text-center pt-3">ToDos App</h1>
        <button onClick={handleDarkSwitch} className={lightMode ? "mode my-4" : "mode mode-dark my-4"}>{lightMode ? "Dark mode" : "Light mode"}</button>
        <Todos lightMode={lightMode} />
      </div>
    </div>
  )
}

export default App
