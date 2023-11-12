import { FaWind } from 'react-icons/fa';
import { FaThermometerHalf } from 'react-icons/fa';
import { GiWaterDrop } from 'react-icons/gi';
import { WiBarometer } from 'react-icons/wi';
import { WiSunrise } from 'react-icons/wi';
import { WiSunset } from 'react-icons/wi';
import { formatToLocalTime } from '../api/weatherApi';
import PropTypes from 'prop-types';

AirConditions.propTypes = {
    weather: PropTypes.object
};

function AirConditions({ weather: {
    speed, feels_like, humidity, pressure, sunrise, sunset, timezone
} }) {
    return (
        <div className="bg-slate-100 rounded-3xl p-7 mt-5 mb-5">
            <p className="text-gray-400 uppercase font-semibold tracking-wide pl-1 text-sm">Air Conditions</p>
            <div className="pt-5 grid grid-cols-2">
                <div className="p-6">
                    <div className='flex gap-1'>
                        <FaWind className='text-gray-500' />
                        <p className="text-gray-500 font-bold uppercase tracking-wider pl-1 text-sm pb-1">Wind</p>
                    </div>
                    <span className="font-bold text-xl">{`${speed.toFixed()}km/h`}</span>
                </div>
                <div className="p-5">
                    <div className='flex'>
                        <FaThermometerHalf className='text-gray-500' />
                        <p className="text-gray-500 font-bold uppercase tracking-wider pl-1 text-sm pb-1">Feels like</p>
                    </div>
                    <span className="font-bold text-xl">{`${feels_like.toFixed()}°`}</span>
                </div>
                <div className="p-6">
                    <div className='flex gap-1'>
                        <GiWaterDrop className='text-gray-500' />
                        <p className="text-gray-500 font-bold uppercase tracking-wider pl-1 text-sm pb-1">Humidity</p>
                    </div>
                    <span className="font-bold text-xl">{`${humidity.toFixed()}%`}</span>
                </div>
                <div className="p-5">
                    <div className='flex'>
                        <WiBarometer size={23} className='text-gray-500' />
                        <p className="text-gray-500 font-bold uppercase tracking-wider pl-1 text-sm pb-1">Pressure</p>
                    </div>
                    <span className="font-bold text-xl">{`${pressure.toFixed()}hPa`}</span>
                </div>
                <div className="p-6">
                    <div className='flex'>
                        <WiSunrise size={25} className='text-gray-500' />
                        <p className="text-gray-500 font-bold uppercase tracking-wider pl-1 text-sm pb-1">Sunrise</p>
                    </div>
                    <span className="font-bold text-xl">{formatToLocalTime(sunrise, timezone, 'hh:mm a')}</span>
                </div>
                <div className="p-5">
                    <div className='flex'>
                        <WiSunset size={25} className='text-gray-500' />
                        <p className="text-gray-500 font-bold uppercase tracking-wider pl-1 text-sm pb-1">Sunset</p>
                    </div>
                    <span className="font-bold text-xl">{formatToLocalTime(sunset, timezone, 'hh:mm a')}</span>
                </div>
            </div>
        </div>
    );
}

export default AirConditions;
