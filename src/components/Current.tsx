import { ICurrent } from "../types/weather";
import { getCelsius, getDate } from "../utils/weather";
function Current(props: ICurrent) {
  return (
    <div className="current">
      <div className="current__wrapper">
        <img src={`http://openweathermap.org/img/wn/${props.weather[0].icon}@4x.png`} alt="cloud" />
        <h2> {getCelsius(props.temp)} °C</h2>
      </div>
      <div className="current__addition">
        <div>{props.weather[0].description}</div>
        <div>Ощущается как {getCelsius(props.feels_like)} °C</div>
        <div>Влажность {props.humidity} %</div>
        <div>Давление {props.pressure} hPa</div>
        <div>Скорость ветра {props.wind_speed} м/c</div>
        <div>Облачность {props.clouds} %</div>
        <div>Видимость {(props.visibility / 1000).toFixed(2)} км</div>
        <div>Восход в {getDate(props.sunrise)}</div>
        <div>Закат в {getDate(props.sunset)}</div>
      </div>
    </div>
  );
}

export default Current;
