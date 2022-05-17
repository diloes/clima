import style from './style.module.css'


const AirQuality = ({ weather }) => {

  const co = Math.round(weather.current.air_quality.co)
  const no2 = weather.current.air_quality.no2

  return (
    <>
      <h3>Calidad del Aire</h3>
      <div className={style.container}>
        <div className={style.item}>
          <h5>CO</h5>
          <p>{co}</p>
        </div>
        <div className={style.item}>
          <h5>NO2</h5>
          <p>{no2.toFixed()}</p>
        </div>
        <div className={style.item}>
          <h5>O3</h5>
          <p>{weather.current.air_quality.o3}</p>
        </div>
        <div className={style.item}>
          <h5>SO2</h5>
          <p>{weather.current.air_quality.so2}</p>
        </div>
      </div>
    </>
  )
}

export default AirQuality

// TODO: El fetch no me trae la info de AQI