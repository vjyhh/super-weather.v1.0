import axios from "axios";
import "./App.css";

function App() {
  let apiKey = "2e0076240708b84af82214022fa3d888";

  let city = "Moscow";
  let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&lang=ru&units=metric&appid=${apiKey}`;

  axios.get(url).then((res) => {
    document.querySelector(".city").innerHTML = res.data.name;

    document.querySelector(".temp").innerHTML = res.data.main.temp;

    document.querySelector(".humidity").innerHTML = res.data.main.humidity;
    document.querySelector(".wind").innerHTML = res.data.wind.speed;
  });

  return (
    <div class="weather">
      <h2>
        Погода в городе <span class="city"></span>
      </h2>
      <p>
        Погода: <span class="temp"></span>°C
      </p>
      <p>
        Влажность: <span class="humidity"></span>%
      </p>
      <p>
        Ветер: <span class="wind"></span> км/ч
      </p>
    </div>
  );
}

export default App;
