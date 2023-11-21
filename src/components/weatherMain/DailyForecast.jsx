import PropTypes from 'prop-types';
import { iconUrlFromCode } from '../../api/weatherApi';

DailyForecast.propTypes = {
    title: PropTypes.string,
    items: PropTypes.array,
};

function DailyForecast({ title, items }) {

    return (
        <div className=' bg-[#95c2e1] h-full rounded-3xl p-7'>
            <h2 className='text-cyan-100 uppercase font-semibold tracking-wide pl-1 text-sm'>{title}</h2>
            <ul className='flex flex-col gap-4'>
                {items.map((item) => {
                    return (
                        <li key={item.title} className='flex justify-between items-center gap-12 mt-8 '>
                            <p className='text-cyan-50 tracking-wide text-sm'>{item.title}</p>
                            <div className='flex items-center gap-4'>
                                <img className='w-12' src={iconUrlFromCode(item.icon)} alt="Sun" />
                                <span className='font-bold text-white text-sm tracking-wide'>{item.description}</span>
                            </div>
                            <span className='font-bold text-white text-sm tracking-wide'>{item.temp.day.toFixed()} <span className='text-white font-normal tracking-wide'>/ {item.temp.night.toFixed()}</span></span>
                        </li>
                    )
                })}
            </ul >
        </div>
    );
}

export default DailyForecast;
