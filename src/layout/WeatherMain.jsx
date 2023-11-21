import getFormattedWeatherData from "../api/weatherApi";
import DailyForecast from "../components/weatherMain/DailyForecast";
import SideNavigation from "../components/SideNavigation";
import AirConditions from "../components/weatherMain/AirConditions";
import { useEffect, useState } from "react";
import TodaysWeather from "../components/weatherMain/TodaysWeather";
import LocationWeather from "../components/weatherMain/LocationWeather";
import Search from "../components/Search";
import { BASE_URL } from "../api/weatherApi";
import { TOKEN } from "../api/weatherApi";

function WeatherMain() {
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


    const handleOnSearchChange = (searchData) => {
        const [lat, lon] = searchData.value.split('');

        const currentWeatherFetch = fetch(`${BASE_URL}/weather?lat=${lat}&lon=${lon}&appid=${TOKEN}`);

        Promise.all([currentWeatherFetch])
            .then(async (response) => {
                const weatherResponse = await response[0].json();

                setWeather({ city: searchData.label, ...weatherResponse });
            })
            .catch((err) => console.log(err));
    }
    console.log(weather);


    return (
        <section className="mt-9 flex gap-5 max-w-[1400px] mx-auto p-3">
            <SideNavigation />
            <div className=" w-[55%] h-full">

                <Search onSearchChange={handleOnSearchChange} />

                {
                    weather && (
                        <div>
                            <LocationWeather weather={weather} />
                            <TodaysWeather title="Today's Forecast" items={weather.hourly} />
                            <AirConditions weather={weather} />
                        </div>
                    )
                }
            </div>

            {
                weather && (
                    <div className="w-[40%]">
                        <DailyForecast title="7-Day Forecast" items={weather.daily} />
                    </div>
                )
            }
        </section>
    );
};






export { WeatherMain as Component };

export default WeatherMain;
