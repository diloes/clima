import { useState, useEffect } from 'react'
import WeatherForm from '../WeatherForm'
import WeatherMainInfo from '../WeatherMainInfo'

const WeatherApp = () => {

  const [weather, setWeather] = useState(null)

  useEffect(() => {
    loadInfo()
  },[]) // Sólo se ejecuta en el primer reenderizado

  useEffect(() => {
    // Cambiamos el título a la pestaña del navegador 
    document.title = `El Clima en ${weather?.location.name ?? ''}`
  }, [weather]) // Se ejecuta cuando cambie weather
  

  /**
   * Función que hace una petición fetch a weather API
   * @param { string } city Ciudad que queremos consultar
   * @returns Información del clima en la ciudad
   */
  const loadInfo = async (city = 'Badajoz') => {

    // Usamos try-catch por si la petición falla
    try {

      // fetch a la url que tenemos en la variable de entorno(.env) + nuestra API Key + 'city'
      const request = await fetch(`${process.env.REACT_APP_URL}&key=${process.env.REACT_APP_KEY}&q=${city}`)

      // Guardamos la response en formato json en 'json'
      const json = await request.json()

      // Metemos 'json' en la variable de estado 'weather'
      setWeather(json)

      console.log(json)

    } catch (error) {
      console.error(error)
    }
  }

  const handleChangeCity = city => {
    setWeather(null)
    loadInfo(city)
  } 

  return (
    <div>
      {/* Componente hijo que muestra input para poner la ciudad */}
      <WeatherForm onChangeCity={handleChangeCity} />

      {/* Componente hijo que muestra la información del clima */}
      <WeatherMainInfo weather={weather} />
    </div>
  )
}

export default WeatherApp

/*
NOTAS:
 - ```const loadInfo = async (city = 'Badajoz') => {``` -> Ponemos 'Badajoz' como parametro por defecto
 para city si no recibe ningún argumento cuando llamemos a la función.  
 - ````El Clima en ${weather?.location.name ?? ''}``` -> Si no recibe weather.location.name ponemos un string
 vacío. Ojo que esta condición se da dentro de las llaves.
*/