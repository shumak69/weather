import axios from "axios";
import { ChangeEvent, MouseEvent, useState } from "react";

interface Coordinates {
  results: {
    geometry: {
      location: { lat: number; lng: number };
    };
    address_components: { short_name: string }[];
  }[];
  status: string;
}

interface SearchLocationProps {
  setCoordinates: (lat: number, lng: number) => void;
  setLocationName: (location: string) => void;
}

function SearchLocation({ setCoordinates, setLocationName }: SearchLocationProps) {
  const GOOGLE_API_KEY = `AIzaSyD0g4oDx7wyjca_M0t3hiaAUQ99YsdocLY`;
  const [locationValue, setLocationValue] = useState("");
  const [required, setRequired] = useState(false);

  function onChangeLocation(e: ChangeEvent<HTMLInputElement>) {
    if (e.target.value.length) {
      setRequired(false);
    }
    setLocationValue(e.target.value);
  }

  function getLocation(e: MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
    if (!locationValue.length) {
      setRequired(true);
      return;
    }
    axios
      .get<Coordinates>(`https://maps.googleapis.com/maps/api/geocode/json`, {
        params: {
          address: locationValue,
          key: GOOGLE_API_KEY,
        },
      })
      .then((res) => {
        console.log(res.data);
        if (res.data.status !== "OK") {
          throw new Error("Could not fetch location!");
        }
        const coordinates = res.data.results[0].geometry.location;
        setCoordinates(coordinates.lat, coordinates.lng);
        setLocationName(res.data.results[0].address_components[0].short_name);
        console.log(coordinates);
      })
      .catch((err) => {
        alert(err.message);
        console.log(err);
      })
      .finally(() => {
        setLocationValue("");
      });
  }
  return (
    <form className="location">
      <div>
        <input
          type="text"
          className="location__search"
          value={locationValue}
          onChange={onChangeLocation}
          placeholder="Введите локацию"
        />
        {required && <div className="required">Введите локацию</div>}
      </div>
      <button className="location__button" onClick={(e) => getLocation(e)}>
        Найти локацию
      </button>
    </form>
  );
}

export default SearchLocation;
