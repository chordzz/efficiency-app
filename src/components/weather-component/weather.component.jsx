import React, { useEffect, useState } from 'react'
import SunnyDay from '../../assets/weather-icons/day/113.png'
import { getLocation } from '../utils/fetchData'

import WindSpeed from '../../assets/icons/wind-50.png'
import Humidity from '../../assets/icons/humidity-50.png'
import Pressure from '../../assets/icons/pressure-50.png'

const WeatherApp = () => {

    const [weather, setWeather] = useState([])

    const url = `http://api.weatherapi.com/v1/current.json?key=${process.env.REACT_APP_API_KEY}`

    useEffect(() => {
        const fetchData = async () => {
            const data = await getLocation(url);
            setWeather(data);
        };

        fetchData();
    }, [])

    useEffect(() => {

    }, [weather])

    const getImagePath = (imgUrl) => {
        const url = imgUrl
        const regex = /\/(day|night)\/\d+\.png/;
        const match = url.match(regex);

        if (match) {
            return(`/assets/weather-icons${match[0]}`); // Output: /day/116.png
        }
    }


  return (
    <div className='w-[35%] p-12 text-center'>
        <div className="icon flex justify-center flex-col">
            {
                weather && weather.current ? 
                    <img src={getImagePath(weather.current.condition.icon)} alt="weather condition icon" className=''/>
                    :
                    <img src={SunnyDay} alt='weather icon' />
            }
        </div>
        {
            weather && weather.current ? 
                <div className='flex flex-col gap-4'>
                    <div className="date font-semibold text-lg">Wednesday, May 29</div>
                    <div className="condition-text text-slate-400 text-sm">{weather.current.condition.text}</div>
                    <div className="temperature text-8xl font-extralight">{weather.current.temp_c}°</div>
                    <div className="location font-bold">{weather.location.region}</div>
                    <div className="other-details flex justify-between mt-8">
                        
                        <div className="item flex flex-col gap-2 text-center justify-between">
                            <span className="weather-icon self-center">
                                <img src={Pressure} alt='pressure' />
                            </span>
                            <span className="value text-xs font-bold">{weather.current.pressure_in}in</span>
                        </div>

                        <div className="item flex flex-col gap-2 text-center justify-between">
                            <span className="weather-icon self-center">
                                <img src={Humidity} alt='humidity' />
                            </span>
                            <span className="value text-xs font-bold">{weather.current.humidity}%</span>
                        </div>

                        <div className="item flex flex-col gap-2 text-center justify-between">
                            <span className="weather-icon self-center">
                                <img src={WindSpeed} alt='windspeed' />
                            </span>
                            <span className="value text-xs font-bold">{weather.current.wind_mph}mph</span>
                        </div>
                    </div>
                </div>
                :
                <div>Loading Data...</div>
        }
    </div>
  )
}

export default WeatherApp