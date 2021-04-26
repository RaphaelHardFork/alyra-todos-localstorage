import { useEffect } from 'react'

const SelectTodos = (props) => {
  const { filter, setFilter, lightMode } = props
  const handleSelectChange = (event) => {
    setFilter(event.target.value)
  }
  useEffect(() => {
    console.log(lightMode)
  }, [lightMode])
  return (
    <div className={lightMode ? "input-group mb-3" : "input-group mb-3 select-dark"}>
      <label className="input-group-text" htmlFor="select">
        Filtrer les tâches
      </label>
      <select
        className="form-select"
        id="select"
        value={filter}
        onChange={handleSelectChange}
      >
        {/* eslint-disable-next-line */}
        <option value="all">Toutes 🌈</option>
        {/* eslint-disable-next-line */}
        <option value="completed">Terminées 💪</option>
        {/* eslint-disable-next-line */}
        <option value="notcompleted">pas Terminées 🌪</option>
      </select>
    </div>
  )
}

export default SelectTodos
