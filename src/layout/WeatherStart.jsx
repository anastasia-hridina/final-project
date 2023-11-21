import umbrellaImage from '../images/umbrella.jpeg';
import { NavLink } from 'react-router-dom';

function WeatherStart() {

    return (
        <section className="pt-9 h-full">
            <div className='container'>
                <div className='row flex'>
                    <div className='col-6'>
                        <img className='object-cover w-4/6 rounded-3xl' src={umbrellaImage} alt="Umbrella" />
                    </div>
                    <div className='col-6 text-center pb-8 pt-64 flex flex-col'>
                        <img className='rounded-2xl w-16 mx-auto mb-6' src={umbrellaImage} alt="Umbrella" />
                        <h1 className='text-5xl font-bold pb-2 tracking-wide'>Breeze</h1>
                        <p className='text-gray-400 tracking-wide'>Weather App</p>
                        <div className='pt-9'>
                            <NavLink to='/weather-forecast' className="rounded-3xl text-white font-semibold tracking-wider bg-blue-400 py-4 px-9 whitespace-nowrap transition-all hover:ease-in-out hover:bg-blue-500 duration-700 ">
                                Get started
                            </NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export { WeatherStart as Component };

export default WeatherStart;
