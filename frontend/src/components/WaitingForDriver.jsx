import React from 'react'

const WaitingForDriver = ({ setWaitingRidePanelOpen }) => {
    return (
        <div>
            <h5 onClick={() => {
                setWaitingRidePanelOpen(false);
            }} className='absolute opacity-1 top-3 right-4 text-xl'><i className="ri-arrow-down-wide-line"></i></h5>
            <h2 className='font-semibold mb-3 text-1xl'>
                your captain is on the way
            </h2>
            <div className=' flex flex-col  items-center justify-between gap-5'>
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


        </div>
    )
}

export default WaitingForDriver
