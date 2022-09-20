export interface IDaily {
  dt: number;
  temp: {
    day: number;
    min: number;
    max: number;
    night: number;
    eve: number;
  };
  clouds: number;
  wind_speed: number;
  sunrise: number;
  sunset: number;
  pressure: number;
  humidity: number;
  weather: { id: number; main: string; description: string; icon: string }[];
  [prop: string | number]: number | object;
}

export interface ICurrent {
  humidity: number;
  pressure: number;
  sunrise: number;
  sunset: number;
  temp: number;
  feels_like: number;
  weather: { id: number; main: string; description: string; icon: string }[];
  wind_speed: number;
  [prop: string | number]: number | object;
}
