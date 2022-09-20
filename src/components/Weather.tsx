import axios from "axios";
import { useEffect, useState } from "react";
import { ICurrent, IDaily } from "../types/weather";
import Current from "./Current";
import Daily from "./Daily";

interface IFetchData {
  current: ICurrent;
  daily: IDaily[];
}

const API_KEY = "b73a6a5b395ec3602e1817fefbfc222e";
const lat = 50.480894;
const lon = 30.608287;
function Weather() {
  const [current, setCurrent] = useState<ICurrent | null>(null);
  const [daily, setDaily] = useState<IDaily[] | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    axios
      .get<IFetchData>("https://api.openweathermap.org/data/3.0/onecall", {
        params: {
          lat: lat,
          lon: lon,
          appid: API_KEY,
        },
      })
      .then((res) => {
        console.log(res.data);
        return res;
      })
      .then((res) => {
        setCurrent(res.data.current);
        setDaily(res.data.daily);
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
      <Current {...current} />
      <div className="daily">
        {daily?.map((day) => (
          <Daily {...day} />
        ))}
      </div>
    </>
  );
}

export default Weather;
