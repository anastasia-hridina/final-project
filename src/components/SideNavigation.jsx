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
        <div className='bg-[#95c2e1] w-24 rounded-2xl max-[992px]:flex max-[992px]:flex-row max-[992px]:w-full max-[992px]:fixed max-[992px]:bottom-0 max-[992px]:left-0 max-[992px]:rounded-none max-[992px]:bg-[#B0CDE8] max-[992px]:z-10'>
            <Link to="/" className='max-[568px]:hidden'>
                <img className='w-20 rounded-full mx-auto mt-3 max-[992px]:mt-0' src={umbrellaClearBg} alt="Umbrella" />
            </Link>
            <nav className='mx-auto pt-14 max-[992px]:pt-1.5'>
                <ul className='flex flex-col gap-10 text-center max-[992px]:flex-row max-[992px]:gap-36 max-[992px]:items-center max-[768px]:gap-24 max-[446px]:gap-14 max-[350px]:gap-8'>
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
                    <li className='max-[992px]:pl-5 max-[992px]:pr-5'>
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
