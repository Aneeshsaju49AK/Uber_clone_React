import React from 'react'
import { Link } from 'react-router-dom'

const Riding = () => {
    return (
        <div className='h-screen'>
            <Link to='/home' className='fixed h-10 w-10 bg-white flex items-center justify-center rounded-full left-3 top-3'>
            <i className="text-lg font-bold ri-home-line"></i>
            </Link>
            <div className='h-1/2'>
                <img className='h-full w-full object-cover' src="https://media.istockphoto.com/id/1268054405/vector/route-planning-city-driving-road-network-destination-map.jpg?s=612x612&w=0&k=20&c=fFAXAL-udAnyNMc03hDYeVl3fg7LJyGu3XG-6xPi58o=" alt="" />
            </div>
            <div className='h-1/2 p-3 '>
                <div className=' flex flex-col  items-center justify-between gap-5 '>
                    <div className='w-full flex items-center justify-between'>
                        <div className='flex justify-start'>
                            <img className='h-12 w-55 ' src="https://www.pngplay.com/wp-content/uploads/8/Uber-PNG-Photos.png" alt="" />
                            <img className='h-12 w-55 ' src="https://www.pngplay.com/wp-content/uploads/8/Uber-PNG-Photos.png" alt="" />
                        </div>

                        <div className='text-right'>
                            <h3 className='text-lg font-medium'>Driver Name</h3>
                            <h4 className='text-xl font-semibold -mt-1 text-gray-600'>Car Name</h4>
                            <p className='text-sm -mt-1 text-gray-600'>Car Name</p>

                        </div>
                    </div>
                    <div className='w-full mt-5'>
                        
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
                <button onClick={()=>{
                
                
            }} className='w-full mt-2 bg-green-600 text-white font-semibold p-2 rounded-md'>Make payment</button>

            </div>
        </div>
    )
}

export default Riding
