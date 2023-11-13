import { iconUrlFromCode } from "../api/weatherApi";
import PropTypes from 'prop-types';

TodaysWeather.propTypes = {
    title: PropTypes.string,
    items: PropTypes.array,
};

function TodaysWeather({ title, items }) {
    console.log(items)
    return (
        <div className="bg-slate-100 rounded-3xl p-7">
            <p className="text-gray-400 uppercase font-semibold tracking-wide pl-1 text-sm">{title}</p>
            <div className="pt-5 flex gap-8 justify-center">
                {items.map((item) => {
                    <div className="flex flex-col gap-4">
                        <p className="text-gray-400 font-semibold tracking-wide text-sm">{item.title}</p>
                        <img className="w-12 mx-auto" src={iconUrlFromCode(item.icon)} alt="" />
                        <p className="font-bold text-center text-lg">{`${item.temp.toFixed()}°`}</p>
                    </div>;
                })}
            </div>
        </div>
    );
}

export default TodaysWeather;
