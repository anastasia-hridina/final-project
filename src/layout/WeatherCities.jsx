import { useState, useEffect } from "react";
import Search from "../components/Search";
import SideNavigation from "../components/SideNavigation";
import CityList from "../components/weatherCities/CityList";
import CityListForecast from "../components/weatherCities/CityListForecast";
import getFormattedWeatherData from "../api/weatherApi";
import TodaysForecastCities from "../components/weatherCities/TodaysForecastCities";
import DailyForecastCities from "../components/weatherCities/DailyForecastCities";


function WeatherCities() {
    const [query, setQuery] = useState({ q: 'Kyiv' });
    const [units, setUnits] = useState({ units: 'metric' });
    const [weather, setWeather] = useState();

    useEffect(() => {
        const fetchWeather = async () => {
            await getFormattedWeatherData({ ...query, ...units })
                .then((data) => {
                    setWeather(data);
                });
        };

        fetchWeather();

    }, [query, units]);

    const handleLocationClick = () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((position) => {
                let lat = position.coords.latitude;
                let lon = position.coords.longitude;

                setQuery({
                    lat,
                    lon,
                });
            });
        }
    };

    useEffect(() => {
        handleLocationClick()
    }, []);


    return (
        <section className="mt-9 flex gap-5 max-w-[1400px] mx-auto p-3">
            <SideNavigation />

            <div className="w-[55%] h-full">
                <Search setQuery={setQuery} units={units} setUnits={setUnits} />
                <CityList />
            </div>

            <div className="w-[40%] h-full">
                {
                    weather && (
                        <div>
                            <CityListForecast weather={weather} />
                            <TodaysForecastCities items={weather.hourly} title="Today's Forecast" />
                            <DailyForecastCities items={weather.daily} title="3-Day Forecast" />
                        </div>
                    )
                }
            </div>
        </section>
    );
}

export { WeatherCities as Component };

export default WeatherCities;
