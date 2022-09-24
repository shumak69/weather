import { WeatherType } from "./Weather";

interface TriggerProps {
  typeOfWeather: WeatherType;
  setTypeOfWeather: (arg: WeatherType) => void;
}

function Trigger({ setTypeOfWeather, typeOfWeather }: TriggerProps) {
  return (
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
  );
}

export default Trigger;
