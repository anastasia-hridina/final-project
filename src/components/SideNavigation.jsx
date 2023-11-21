import umbrellaClearBg from '../images/umbrella-clear-bg.png';
import { NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { WiDayShowers } from 'react-icons/wi';
import { MdFormatListBulleted } from 'react-icons/md';
import { FaMap } from 'react-icons/fa6';

const navClass = "flex flex-col justify-center items-center gap-1 text-cyan-50 hover:text-cyan-700";

function getNavClasses({ isActive }) {
    return isActive ? `${navClass} nav-active` : navClass;
}

function SideNavigation() {
    return (
        <div className='bg-[#95c2e1] w-24 rounded-2xl ml-4'>
            <Link to="/">
                <img className='w-20 rounded-full mx-auto mt-3' src={umbrellaClearBg} alt="Umbrella" />
            </Link>
            <nav className='mx-auto pt-14'>
                <ul className='flex flex-col gap-10 text-center'>
                    <li>
                        <NavLink to='/weather-forecast' className={getNavClasses}>
                            <WiDayShowers size={32} />
                            Weather
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/weather-cities' className={getNavClasses}>
                            <MdFormatListBulleted size={28} />
                            Cities
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/weather-map' className={getNavClasses}>
                            <FaMap size={25} />
                            Map
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default SideNavigation;
