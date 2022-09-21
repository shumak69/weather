interface Weather {
  weather: { id: number; main: string; description: string; icon: string }[];
  clouds: number;
  wind_speed: number;
  sunrise: number;
  sunset: number;
  pressure: number;
  humidity: number;
}

export interface IDaily extends Weather {
  dt: number;
  temp: {
    day: number;
    min: number;
    max: number;
    night: number;
    eve: number;
  };
  [prop: string | number]: number | object;
}

export interface ICurrent extends Weather {
  temp: number;
  feels_like: number;
  [prop: string | number]: number | object;
  visibility: number;
}

export interface IHourly extends Weather {
  dt: number;
  temp: number;
  feels_like: number;
}
