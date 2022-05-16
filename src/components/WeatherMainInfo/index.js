const WeatherMainInfo = ({ weather }) => {
  
  return (
    <div>
      <div>{weather?.location.name}</div>
      <div>{weather?.location.country}</div>
      <div>
        <div>
          <img 
            src={`http://${weather?.current.condition.icon}`} 
            width='128'
            alt={`http://${weather?.current.condition.text}`}
          />
        </div>
        <div>
          <div>{weather?.current.condition.text}</div>
          <div>{weather?.current.temp_c}ºC</div>
        </div>
      </div>
      <iframe 
        title='map'
        src={`https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d24900.274586566054!2d${weather?.location.lon}5!3d${weather?.location.lat}5!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses!2ses!4v1652717010856!5m2!1ses!2ses`} width="600"
        height="450" 
        style={{ border: 0 }} 
        allowfullscreen="" 
        loading="lazy" 
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  )
}

export default WeatherMainInfo