import umbrellaClearBg from '../images/umbrella-clear-bg.png';
import { NavLink } from 'react-router-dom';
import { WiDayShowers } from 'react-icons/wi';
import { MdFormatListBulleted } from 'react-icons/md';
import { FaMap } from 'react-icons/fa6';

function SideNavigation() {
    return (
        <section className='bg-slate-100 flex flex-col w-24 rounded-2xl h-screen ml-4'>
            <img className='w-20 rounded-full mx-auto mt-3' src={umbrellaClearBg} alt="Umbrella" />
            <nav className='mx-auto pt-14'>
                <ul className='flex flex-col gap-10 text-center'>
                    <li>
                        <NavLink to='/weather-forecast'>
                            <WiDayShowers size={32} className='mx-auto mb-1' />
                            Weather
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/weather-cities'>
                            <MdFormatListBulleted size={28} className='mx-auto mb-2' />
                            Cities
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/weather-map'>
                            <FaMap size={25} className='mx-auto mb-2' />
                            Map
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </section>
    );
}

export default SideNavigation;
