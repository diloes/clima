import AirQuality from '../AirQuality/AirQuality'
import style from './style.module.css'


const WeatherMainInfo = ({ weather }) => {
  
  return (
    <div className={style.mainInfo}>
      <div className={style.city}>{weather?.location.name}</div>
      <div className={style.country}>{weather?.location.country}</div>
      <div className={style.row}>
        <div> 
          <img 
            src={`http://${weather?.current.condition.icon}`} 
            width='128'
            alt={`http://${weather?.current.condition.text}`}
          />
        </div>
        <div className={style.weatherConditions}>
          <div className={style.condition}>{weather?.current.condition.text}</div>
          <div className={style.current}>{weather?.current.temp_c}ºC</div>
        </div>
      </div>
      <iframe 
        title='map'
        src={`https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d24900.274586566054!2d${weather?.location.lon}5!3d${weather?.location.lat}5!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses!2ses!4v1652717010856!5m2!1ses!2ses`} 
        width="100%"
        height="450" 
        style={{ border: 0 }} 
        loading="lazy" 
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
      <AirQuality weather={weather} />
    </div>
  )
}

export default WeatherMainInfo