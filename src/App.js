import axios from "axios";
import { useState } from "react";
import "./App.css";

function App() {
  const [cityName, setCityName] = useState("");
  const [temp, setTemp] = useState();
  const [humidity, setHumidity] = useState();
  const [wind, setWind] = useState();
  const [inputCity, setInputCity] = useState();

  let apiKey = "2e0076240708b84af82214022fa3d888";

  return (
    <div className="weather">
      <div className="headerMenu">
        <div className="searchCity">
          <input
            type="text"
            id="name"
            className="inputCityName"
            onChange={(text) => {
              setInputCity(text.target.value);
            }}
          />

          <button
            className="searchButton"
            onClick={() => {
              let url = `http://api.openweathermap.org/data/2.5/weather?q=${inputCity}&lang=ru&units=metric&appid=${apiKey}`;
              axios.get(url).then((res) => {
                setCityName(res.data.name);
                setTemp(res.data.main.temp);
                setHumidity(res.data.main.humidity);
                setWind(res.data.wind.speed);
              });
              console.log(cityName);
            }}
          >
            Search
          </button>
        </div>
      </div>

      <h2>
        Погода в городе <span className="city">{cityName}</span>
      </h2>
      <p>
        Погода: <span className="temp">{temp}</span>°C
      </p>
      <p>
        Влажность: <span className="humidity">{humidity}</span>%
      </p>
      <p>
        Ветер: <span className="wind">{wind}</span> км/ч
      </p>
    </div>
  );
}

export default App;
