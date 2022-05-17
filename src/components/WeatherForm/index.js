import { useState } from 'react'

import style from './style.module.css'

const WeatherForm = ({ onChangeCity }) => {

  // Variable estado
  const [city, setCity] = useState('')

  // Guardamos el value del input en 'ciy' si no es un string vacío
  const handleChange = e => {
    const value = e.target.value
    if(value !== ''){ setCity(value) }
  }

  // Prevenimos y llamamos a la función 'onChangeCity'
  const handleSubmit = e => {
    e.preventDefault()
    onChangeCity(city)
  }

  return (
    <>
      <h2>Consultar el clima</h2>
      <form className={style.container} onSubmit={handleSubmit}>
        <input 
          className={style.input} 
          onChange={handleChange} 
          placeholder='Introduce una ciudad'
        />
      </form>
    </>
  )
}

export default WeatherForm