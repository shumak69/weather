import { useState } from "react";
import { IDaily } from "../types/weather";
import { getCelsius, getDate, getDay, getDayOfMonth } from "../utils/weather";

function Daily(props: IDaily) {
  const [isDetailedOpen, setisDetailedOpen] = useState(false);
  return (
    <div className="daily__item" style={{ height: isDetailedOpen ? 350 : undefined }}>
      <div className="daily__wrapper">
        <div className="daily__day">{getDay(props.dt)}</div>
        <img src={`http://openweathermap.org/img/wn/${props.weather[0].icon}@4x.png`} alt="cloud" />
        <div>
          <h2>{getCelsius(props.temp.eve)} °C</h2>
          <div>{getDayOfMonth(props.dt)}</div>
        </div>
      </div>
      <div className="daily__addition">
        <div className="daily__description"> {props.weather[0].description}</div>
        <div className="daily__min">Мин. температура {getCelsius(props.temp.min)} °C</div>
        <div className="daily__max">Макс. температура {getCelsius(props.temp.max)} °C</div>
        {isDetailedOpen && (
          <>
            <div>Давление {props.pressure}</div>
            <div>Восход {getDate(props.sunrise)}</div>
            <div>Закат {getDate(props.sunset)}</div>
            <div>Скорость Ветра {props.wind_speed} м/с</div>
            <div>Влажность {props.humidity} %</div>
            <div>Облачность {props.clouds} %</div>
          </>
        )}
      </div>

      <div className="daily__detailed" onClick={() => setisDetailedOpen((state) => !state)}>
        Подробнее
      </div>
    </div>
  );
}

export default Daily;
