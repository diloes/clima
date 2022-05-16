import { useState } from 'react'


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
    <form onSubmit={handleSubmit}>
      <input onChange={handleChange} />
    </form>
  )
}

export default WeatherForm