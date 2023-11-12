import { Button } from '@mui/material';
import umbrellaImage from '../images/umbrella.jpeg';
import WeatherMain from './WeatherMain';
import { Link } from 'react-router-dom';

function WeatherStart() {

    return (
        <main className='h-full'>
            <section className="pt-9">
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
                                <Link to='/weather-forecast'>
                                    <Button
                                        size="large"
                                        variant="contained"
                                    >Get started</Button>
                                </Link>

                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <WeatherMain />
        </main>
    );
}

export { WeatherStart as Component };

export default WeatherStart;
