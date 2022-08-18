import axios from 'axios';
import { useState } from 'react';
import './App.css';
import Humidity from './icons/Humidity';
import Sun from './icons/Sun';
import Thermometer from './icons/Thermometer';
import WindSpeed from './icons/WindSpeed';

function App() {
    const [cityName, setCityName] = useState('');
    const [temp, setTemp] = useState();
    const [humidity, setHumidity] = useState();
    const [wind, setWind] = useState();
    const [inputCity, setInputCity] = useState();
    const [showDivCity, setShowDivCity] = useState(false);
    const [da1, da2] = useState({
        backgroundColor: 'black',
    });

    let apiKey = '2e0076240708b84af82214022fa3d888';

    return (
        <div className='weather'>
            <div className='headerMenu day night'>
                <div className='searchCity'>
                    <input
                        type='text'
                        id='name'
                        className='inputCityName'
                        placeholder='Введите город'
                        onChange={(text) => {
                            setInputCity(text.target.value);
                        }}
                    />

                    <button
                        className='searchButton'
                        onClick={() => {
                            let url = `http://api.openweathermap.org/data/2.5/weather?q=${inputCity}&lang=ru&units=metric&appid=${apiKey}`;
                            axios.get(url).then((res) => {
                                setCityName(res.data.name);
                                setTemp(res.data.main.temp);
                                setHumidity(res.data.main.humidity);
                                setWind(res.data.wind.speed);
                                setShowDivCity(true);
                            });
                            console.log(cityName);
                        }}
                    >
                        Search
                    </button>
                </div>
            </div>
            {showDivCity ? (
                <div className='weatherList'>
                    <h2>
                        Погода в городе
                        <span className='city tab'>{cityName}</span>
                    </h2>
                    <div className='temperature'>
                        <Thermometer /> <span className='temp tab'>{temp}</span>
                        °C
                    </div>
                    <div className='humidityWind'>
                        <Humidity />
                        <span className='humidity tab'>{humidity}</span>%
                    </div>
                    <div className='windSpeed'>
                        <WindSpeed />
                        <span className='wind tab'>{wind}</span> км/ч
                    </div>
                </div>
            ) : (
                <div></div>
            )}
            <div
                className='darkTheme'
                style={da1}
                onClick={() => {
                    if (da1.backgroundColor === 'red') {
                        da2({ backgroundColor: 'black' });
                    } else {
                        da2({ backgroundColor: 'red' });
                    }
                }}
            ></div>
        </div>
    );
}

export default App;
