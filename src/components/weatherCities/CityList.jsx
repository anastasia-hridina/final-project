import sunImg from '../../images/sun.png'

function CityList() {
    return (
        <div className='mt-10'>
            <ul>
                <li className="flex items-center gap-10 mt-5 p-7 bg-[#95c2e1] rounded-3xl active:bg-white active:border active:border-blue-500 cursor-pointer">
                    <img className='w-20' src={sunImg} alt="" />
                    <div>
                        <h3 className='text-3xl font-bold tracking-wide text-white mb-1 active:text-black'>Madrid</h3>
                        <span className='text-cyan-100 font-medium text-lg'>10:23</span>
                    </div>
                    <span className='ml-auto mb-auto text-cyan-100 text-4xl active:text-gray-400'>31°</span>
                </li>
                <li className="flex items-center gap-10 mt-5 p-7 bg-[#95c2e1] rounded-3xl">
                    <img className='w-20' src={sunImg} alt="" />
                    <div>
                        <h3 className='text-3xl font-bold tracking-wide text-white mb-1'>New York</h3>
                        <span className='text-cyan-100 font-medium text-lg'>10:23</span>
                    </div>
                    <span className='ml-auto mb-auto text-cyan-100 text-4xl'>31°</span>
                </li>
                <li className="flex items-center gap-10 mt-5 p-7 bg-[#95c2e1] rounded-3xl">
                    <img className='w-20' src={sunImg} alt="" />
                    <div>
                        <h3 className='text-3xl font-bold tracking-wide text-white mb-1'>Tokyo</h3>
                        <span className='text-cyan-100 font-medium text-lg'>10:23</span>
                    </div>
                    <span className='ml-auto mb-auto text-cyan-100 text-4xl'>31°</span>
                </li>
            </ul>
        </div>
    );
}

export default CityList;
