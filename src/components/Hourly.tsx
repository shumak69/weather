import { useState } from "react";
import { IHourly } from "../types/weather";
import { getCelsius, getDate, getDay, getDayOfMonth, getHour } from "../utils/weather";

function Hourly(props: IHourly) {
  return (
    <div className="hourly__item">
      <div className="hourly__time">{getHour(props.dt)}</div>
      <div className="hourly__date">{getDayOfMonth(props.dt)}</div>
      <div className="hourly__wrapper">
        <img src={`http://openweathermap.org/img/wn/${props.weather[0].icon}@4x.png`} alt="cloud" />
        <div>
          <h2>{getCelsius(props.temp)} °C</h2>
        </div>
      </div>
      <div className="hourly__addition">
        <div className="hourly__description"> {props.weather[0].description}</div>
        <div>Ощущается как {getCelsius(props.feels_like)} °C</div>
        <div>Скорость ветра {props.wind_speed} м/с</div>
        <div>Влажность {props.humidity} %</div>
        <div>Облачность {props.clouds} %</div>
      </div>
    </div>
  );
}

export default Hourly;
