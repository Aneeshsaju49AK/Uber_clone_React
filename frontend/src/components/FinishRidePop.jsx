import React from 'react'
import { Link } from 'react-router-dom';

const FinishRidePop = ({setFinishRidePopPanelOpen}) => {
    return (
        <div >
            <h5 onClick={() => {
                setFinishRidePopPanelOpen(false);

            }} className='absolute opacity-1 top-3 right-4 text-xl'><i className="ri-arrow-down-wide-line"></i></h5>
            <h2 className='font-semibold mb-3 text-2xl'>
               Finish Ride 
            </h2>
            <div className='flex  items-center justify-between p-3 rounded-xl bg-yellow-300'>
                <div className='flex items-center gap-3 mt-1 justify-center'>
                    <img className='h-12 w-12 object-cover rounded-full' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAlELyRhNhA5Z-36v6Han1sb72KlNSrgVs2w&s" alt="" />
                    <h2 className='text-xl font-medium'>Aswathy</h2>
                </div>
                <h2 className='text-lg font-semibold'>2.2 KM</h2>

            </div>
            <div className=' flex flex-col  items-center justify-between gap-5'>

                <div className='w-full mt-5'>
                    <div className='flex items-center gap-3 p-3 border-b-2'>
                        <i className="ri-map-pin-2-fill"></i>
                        <div>
                            <h3 className='text-lg font-medium'>562/11-A</h3>
                            <p className='text-sm -mt-1 text-gray-600'>Thalakode Kochi, Ernakulam</p>
                        </div>
                    </div>
                    <div className='flex items-center gap-3 p-3 border-b-2'>
                        <i className="ri-square-fill"></i>
                        <div>
                            <h3 className='text-lg font-medium'>562/11-A</h3>
                            <p className='text-sm -mt-1 text-gray-600'>Thalakode Kochi, Ernakulam</p>
                        </div>
                    </div>
                    <div className='flex items-center gap-3 p-3 '>
                        <i className="ri-bank-card-fill"></i>
                        <div>
                            <h3 className='text-lg font-medium'>$193.20</h3>
                            <p className='text-sm -mt-1 text-gray-600'>Cash</p>
                        </div>
                    </div>

                </div>
            </div>
            <div className='pt-10'>
                <Link to="/captain-diretion">
                    <button onClick={() => {
                    }} className='w-full mt-5 bg-green-600 text-white font-semibold p-2 rounded-md'>Finish</button>
                </Link>

            </div>
        </div>
    )
}

export default FinishRidePop
