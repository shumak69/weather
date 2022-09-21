import axios from "axios";
import { useEffect, useState } from "react";
import { ICurrent, IDaily, IHourly } from "../types/weather";
import { getCelsius } from "../utils/weather";
import Current from "./Current";
import Daily from "./Daily";
import Hourly from "./Hourly";

interface IFetchData {
  current: ICurrent;
  daily: IDaily[];
  timezone: string;
  hourly: IHourly[];
}

const API_KEY = "b73a6a5b395ec3602e1817fefbfc222e";
const lat = 50.480894;
const lon = 30.608287;
// const lat = 33.921122;
// const lon = -89.069237;
function Weather() {
  const [current, setCurrent] = useState<ICurrent | null>(null);
  const [daily, setDaily] = useState<IDaily[] | null>(null);
  const [hourly, setHourly] = useState<IHourly[] | null>(null);
  const [timezone, setTimezone] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [typeOfWeather, setTypeOfWeather] = useState<"daily" | "hourly">("daily");

  useEffect(() => {
    setIsLoading(true);
    axios
      .get<IFetchData>("https://api.openweathermap.org/data/3.0/onecall", {
        params: {
          lat: lat,
          lon: lon,
          appid: API_KEY,
          lang: "ru",
        },
      })
      .then((res) => {
        console.log(res.data);
        return res;
      })
      .then((res) => {
        setCurrent(res.data.current);
        setDaily(res.data.daily);
        setTimezone(res.data.timezone);
        setHourly(res.data.hourly.slice(0, 23));
      })
      .catch((err) => alert(err))
      .finally(() => {
        setIsLoading(false);
      });
  }, []);
  if (isLoading) {
    return <div>Загрузка</div>;
  }
  if (!current) {
    return <div>Ошибка при получении данных</div>;
  }
  return (
    <>
      <div className="timezone">
        {timezone}
        <br></br>
        {getCelsius(current.temp)} °C
      </div>
      <Current {...current} />
      <div className="dailyOrHourlyTriggers">
        <div
          className={["daily-trigger", typeOfWeather === "daily" ? "active" : ""].join(" ")}
          onClick={() => setTypeOfWeather("daily")}
        >
          <div>По дням</div>
        </div>
        <div
          className={["hourly-trigger", typeOfWeather === "hourly" ? "active" : ""].join(" ")}
          onClick={() => setTypeOfWeather("hourly")}
        >
          <div>По часам</div>
        </div>
      </div>
      {typeOfWeather === "daily" ? (
        <div className="daily">
          {daily?.map((day) => (
            <Daily key={day.dt} {...day} />
          ))}
        </div>
      ) : (
        <div className="hourly">
          {hourly?.map((hour) => (
            <Hourly key={hour.dt} {...hour} />
          ))}
        </div>
      )}
    </>
  );
}

export default Weather;
