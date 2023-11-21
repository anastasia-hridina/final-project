import { FaWind } from 'react-icons/fa';
import { FaThermometerHalf } from 'react-icons/fa';
import { GiWaterDrop } from 'react-icons/gi';
import { WiBarometer } from 'react-icons/wi';
import { WiSunrise } from 'react-icons/wi';
import { WiSunset } from 'react-icons/wi';
import { formatToLocalTime } from '../../api/weatherApi';
import PropTypes from 'prop-types';

AirConditions.propTypes = {
    weather: PropTypes.object
};

function AirConditions({ weather: {
    speed, feels_like, humidity, pressure, sunrise, sunset, timezone
} }) {
    return (
        <div className="bg-[#95c2e1] rounded-3xl p-7 mt-5">
            <p className="text-cyan-100 uppercase font-semibold tracking-wide pl-1 text-sm">Air Conditions</p>
            <div className="pt-5 grid grid-cols-2">
                <div className="p-6">
                    <div className='flex gap-1'>
                        <FaWind className='text-cyan-100' />
                        <p className="text-cyan-100 font-bold uppercase tracking-wider pl-1 text-sm pb-2">Wind</p>
                    </div>
                    <span className="font-bold text-xl text-white">{`${speed.toFixed()} km/h`}</span>
                </div>
                <div className="p-6">
                    <div className='flex'>
                        <FaThermometerHalf className='text-cyan-100' />
                        <p className="text-cyan-100 font-bold uppercase tracking-wider pl-1 text-sm pb-2">Feels like</p>
                    </div>
                    <span className="font-bold text-xl text-white">{`${feels_like.toFixed()}°`}</span>
                </div>
                <div className="p-6">
                    <div className='flex gap-1'>
                        <GiWaterDrop className='text-cyan-100' />
                        <p className="text-cyan-100 font-bold uppercase tracking-wider pl-1 text-sm pb-2">Humidity</p>
                    </div>
                    <span className="font-bold text-xl text-white">{`${humidity.toFixed()} %`}</span>
                </div>
                <div className="p-5">
                    <div className='flex'>
                        <WiBarometer size={23} className='text-cyan-100' />
                        <p className="text-cyan-100 font-bold uppercase tracking-wider pl-1 text-sm pb-2">Pressure</p>
                    </div>
                    <span className="font-bold text-xl text-white">{`${pressure.toFixed()} hPa`}</span>
                </div>
                <div className="p-6">
                    <div className='flex'>
                        <WiSunrise size={25} className='text-cyan-100' />
                        <p className="text-cyan-100 font-bold uppercase tracking-wider pl-1 text-sm pb-2">Sunrise</p>
                    </div>
                    <span className="font-bold text-xl text-white">{formatToLocalTime(sunrise, timezone, 'hh:mm a')}</span>
                </div>
                <div className="p-5">
                    <div className='flex'>
                        <WiSunset size={25} className='text-cyan-100' />
                        <p className="text-cyan-100 font-bold uppercase tracking-wider pl-1 text-sm pb-2">Sunset</p>
                    </div>
                    <span className="font-bold text-xl text-white">{formatToLocalTime(sunset, timezone, 'hh:mm a')}</span>
                </div>
            </div>
        </div>
    );
}

export default AirConditions;
