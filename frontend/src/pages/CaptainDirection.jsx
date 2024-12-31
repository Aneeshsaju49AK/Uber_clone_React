import React, { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import FinishRidePop from '../components/FinishRidePop';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

const CaptainDirection = () => {
    const [finishRidePopPanelOpen, setFinishRidePopPanelOpen] = useState(false);
      const finishRidePopPanelRef = useRef(null);
    useGSAP(() => {
        if (finishRidePopPanelOpen) {
          gsap.to(finishRidePopPanelRef.current, {
            translateY: "0%"
          })
        } else {
          gsap.to(finishRidePopPanelRef.current, {
            translateY: "100%"
          })
        }
      }, [finishRidePopPanelOpen])
    return (
        <div>
            <div className='h-screen'>
                <div className='fixed p-6 top-3 flex items-center justify-between w-screen'>
                    <img className='w-16  left-5 top-5' src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png" alt="" />
                    <Link to='/home' className=' h-10 w-10 bg-white flex items-center justify-center rounded-full left-3 top-3'>

                        <i className="text-lg font-bold ri-logout-box-r-line"></i>
                    </Link>
                </div>
                <div className='h-4/5'>

                    <img className='h-full w-full ' src="https://media.istockphoto.com/id/1268054405/vector/route-planning-city-driving-road-network-destination-map.jpg?s=612x612&w=0&k=20&c=fFAXAL-udAnyNMc03hDYeVl3fg7LJyGu3XG-6xPi58o=" alt="" />
                </div>
                <div className='h-1/5 p-6 bg-yellow-400 flex items-center justify-between relative '>
                    <h5 onClick={() => {

                    }} className='absolute opacity-1 top-3 left-[50%] text-xl'><i className="ri-arrow-down-wide-line"></i></h5>
                    <h4 className='text-xl font-semibold'>4 KM away</h4>
                    <button onClick={() => {

                    setFinishRidePopPanelOpen(true);
                    }} className='w-1/2  bg-green-600 text-white font-semibold p-2 rounded-md'>Complete Ride</button>

                </div>
                <div ref={finishRidePopPanelRef} className='w-full h-[80%] fixed z-10 bottom-0 translate-y-full  bg-white py-4 px-5'>
                    <FinishRidePop setFinishRidePopPanelOpen={setFinishRidePopPanelOpen}/>
                </div>

            </div>
        </div>
    )
}

export default CaptainDirection
