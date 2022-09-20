import { ICurrent } from "../types/weather";
import { getCelsius, getDate } from "../utils/weather";
import cloud from "../assets/cloud-svgrepo-com.svg";
function Current(props: ICurrent) {
  return (
    <div className="current">
      <div className="current__wrapper">
        <img src={`http://openweathermap.org/img/wn/${props.weather[0].icon}@4x.png`} alt="cloud" />
        <h2>Температура {getCelsius(props.temp)} °C</h2>
      </div>
      <div className="current__addition">
        <div>Ощущается как {getCelsius(props.feels_like)} °C</div>
        <div>Влажность {props.humidity} %</div>
        <div>Давление {props.pressure} hPa</div>
        <div>Скорость ветра {props.wind_speed} м/c</div>
        <div>Восход в {getDate(props.sunrise)}</div>
        <div>Закат в {getDate(props.sunset)}</div>
        <div>Погода {props.weather[0].main}</div>
        <div>Описание {props.weather[0].description}</div>
      </div>
    </div>
  );
}

export default Current;
