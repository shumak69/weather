export function getCelsius(temperature: number) {
  return (temperature - 273.15).toFixed(0);
}

function getZero(num: number): string | number {
  if (num < 10 && num >= 0) {
    return `0${num}`;
  } else {
    return num;
  }
}

export function getDate(date: number) {
  const newDate = new Date(+`${date}000`);
  return `${getZero(newDate.getHours())}:${getZero(newDate.getMinutes())}:${getZero(
    newDate.getSeconds()
  )}`;
}

export function getDayOfMonth(date: number) {
  const newDate = new Date(date * 1000);
  return `${newDate.getDate()} ${newDate.toLocaleString("ru", { month: "short" })}`;
}

export function getDay(date: number) {
  const newDate = new Date(date * 1000);
  return `${newDate.toLocaleString("ru", { weekday: "short" })}`;
}

export function getHour(date: number) {
  const newDate = new Date(date * 1000);
  return getZero(newDate.getHours());
}
