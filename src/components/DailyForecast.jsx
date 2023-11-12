import PropTypes from 'prop-types';

DailyForecast.propTypes = {
    title: PropTypes.string
};

function DailyForecast({ title }) {

    return (
        <div className='absolute right-10 top-0 bg-slate-100 rounded-3xl p-7 w-[450px]'>
            <h2 className='text-gray-400 uppercase font-semibold tracking-wide pl-1 text-sm'>{title}</h2>
            <ul className=''>
                <li className='flex justify-between items-center gap-12 mt-8'>
                    <p className='text-gray-400 tracking-wide text-sm'>Today</p>
                    <div className='flex items-center gap-4'>
                        <img className='w-12' src='https://openweathermap.org/img/wn/10d@2x.png' alt="Sun" />
                        <span className='font-bold text-sm tracking-wide'>Sunny</span>
                    </div>
                    <span className='font-bold text-sm tracking-wide'>37<span className='text-gray-400 font-normal tracking-wide'>/22</span></span>
                </li>
                <li className='flex justify-between items-center gap-12 mt-8'>
                    <p className='text-gray-400 tracking-wide text-sm'>Tue</p>
                    <div className='flex items-center gap-4'>
                        <img className='w-12' src='https://openweathermap.org/img/wn/10d@2x.png' alt="Sun" />
                        <span className='font-bold text-sm tracking-wide'>Sunny</span>
                    </div>
                    <span className='font-bold text-sm tracking-wide'>37<span className='text-gray-400 font-normal tracking-wide'>/22</span></span>
                </li>
                <li className='flex justify-between items-center gap-12 mt-8'>
                    <p className='text-gray-400 tracking-wide text-sm'>Wed</p>
                    <div className='flex items-center gap-4'>
                        <img className='w-12' src='https://openweathermap.org/img/wn/10d@2x.png' alt="Sun" />
                        <span className='font-bold text-sm tracking-wide'>Sunny</span>
                    </div>
                    <span className='font-bold text-sm tracking-wide'>37<span className='text-gray-400 font-normal tracking-wide'>/22</span></span>
                </li>
                <li className='flex justify-between items-center gap-12 mt-8'>
                    <p className='text-gray-400 tracking-wide text-sm'>Thu</p>
                    <div className='flex items-center gap-4'>
                        <img className='w-12' src='https://openweathermap.org/img/wn/10d@2x.png' alt="Sun" />
                        <span className='font-bold text-sm tracking-wide'>Sunny</span>
                    </div>
                    <span className='font-bold text-sm tracking-wide'>37<span className='text-gray-400 font-normal tracking-wide'>/22</span></span>
                </li>
                <li className='flex justify-between items-center gap-12 mt-8'>
                    <p className='text-gray-400 tracking-wide text-sm'>Fri</p>
                    <div className='flex items-center gap-4'>
                        <img className='w-12' src='https://openweathermap.org/img/wn/10d@2x.png' alt="Sun" />
                        <span className='font-bold text-sm tracking-wide'>Sunny</span>
                    </div>
                    <span className='font-bold text-sm tracking-wide'>37<span className='text-gray-400 font-normal tracking-wide'>/22</span></span>
                </li>
                <li className='flex justify-between items-center gap-12 mt-8'>
                    <p className='text-gray-400 tracking-wide text-sm'>Sat</p>
                    <div className='flex items-center gap-4'>
                        <img className='w-12' src='https://openweathermap.org/img/wn/10d@2x.png' alt="Sun" />
                        <span className='font-bold text-sm tracking-wide'>Sunny</span>
                    </div>
                    <span className='font-bold text-sm tracking-wide'>37<span className='text-gray-400 font-normal tracking-wide'>/22</span></span>
                </li>
                <li className='flex justify-between items-center gap-12 mt-8'>
                    <p className='text-gray-400 tracking-wide text-sm'>Sun</p>
                    <div className='flex items-center gap-4'>
                        <img className='w-12' src='https://openweathermap.org/img/wn/10d@2x.png' alt="Sun" />
                        <span className='font-bold text-sm tracking-wide'>Sunny</span>
                    </div>
                    <span className='font-bold text-sm tracking-wide'>37<span className='text-gray-400 font-normal tracking-wide'>/22</span></span>
                </li>
            </ul >
        </div>
    );
}

export default DailyForecast;
