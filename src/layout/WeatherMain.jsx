import getFormattedWeatherData from "../api/weatherApi";
import DailyForecast from "../components/DailyForecast";
import SideNavigation from "../components/SideNavigation";
import AirConditions from "../components/AirConditions";
import { useEffect, useState } from "react";
import TodaysWeather from "../components/TodaysWeather";
import LocationWeather from "../components/LocationWeather";
import InputMain from "../components/InputMain";

function WeatherMain() {

    const [query, setQuery] = useState({ q: 'madrid' });
    const [units, setUnits] = useState('metric');
    const [weather, setWeather] = useState({});

    useEffect(() => {
        const fetchWeather = async () => {
            await getFormattedWeatherData({ ...query }).then((data) => {
                setWeather(data);
            });

        };

        fetchWeather();
    }, [query, units]);

    return (
        <section className="mt-9 h-full block relative">
            <SideNavigation />

            <div className="absolute left-36 top-0">
                <InputMain setQuery={setQuery} units={units} setUnits={setUnits} />

                {typeof weather != "undefined" ? (
                    <div>
                        <LocationWeather weather={weather} />
                        <TodaysWeather title="Today's Forecast" items={weather.hourly} />
                    </div>) : (
                    ""
                )
                }
            </div>

            {
                typeof weather != "undefined" ? (
                    <div>
                        <AirConditions weather={weather} />
                        <DailyForecast title="7-Day Forecast" weather={weather.daily} />
                    </div>) : (
                    ""
                )
            }
        </section >
    );
}

export { WeatherMain as Component };

export default WeatherMain;
