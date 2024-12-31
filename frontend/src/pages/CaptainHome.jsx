import React, { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import CaptainDetails from '../components/CaptainDetails'
import RidePopUp from '../components/RidePopUp'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import ConfirmRidePopUp from '../components/ConfirmRidePopUp'

const CaptainHome = () => {
  const [ridePopPanelOpen, setRidePopPanelOpen] = useState(true);
  const ridePopPanelRef = useRef(null);
  const [confirmRidePopPanelOpen, setConfirmRidePopPanelOpen] = useState(false);
  const confirmRidePopPanelRef = useRef(null);
  useGSAP(() => {
    if (ridePopPanelOpen) {
      gsap.to(ridePopPanelRef.current, {
        translateY: "0%"
      })
    } else {
      gsap.to(ridePopPanelRef.current, {
        translateY: "100%"
      })
    }
  }, [ridePopPanelOpen])
  useGSAP(() => {
    if (confirmRidePopPanelOpen) {
      gsap.to(confirmRidePopPanelRef.current, {
        translateY: "0%"
      })
    } else {
      gsap.to(confirmRidePopPanelRef.current, {
        translateY: "100%"
      })
    }
  }, [confirmRidePopPanelOpen])
  return (
    <div className='h-screen'>
      <div className='fixed p-6 top-3 flex items-center justify-between w-screen'>
        <img className='w-16  left-5 top-5' src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png" alt="" />
        <Link to='/home' className=' h-10 w-10 bg-white flex items-center justify-center rounded-full left-3 top-3'>

          <i className="text-lg font-bold ri-logout-box-r-line"></i>
        </Link>
      </div>
      <div className='h-3/5'>
        <img className='h-full w-full ' src="https://media.istockphoto.com/id/1268054405/vector/route-planning-city-driving-road-network-destination-map.jpg?s=612x612&w=0&k=20&c=fFAXAL-udAnyNMc03hDYeVl3fg7LJyGu3XG-6xPi58o=" alt="" />
      </div>
      <div className='h-2/5 p-6 '>
        <CaptainDetails />
      </div>
      <div ref={ridePopPanelRef} className='w-full fixed z-10 bottom-0 translate-y-full bg-white py-4 px-5'>
        <RidePopUp setRidePopPanelOpen={setRidePopPanelOpen} setConfirmRidePopPanelOpen={setConfirmRidePopPanelOpen} />
      </div>
      <div ref={confirmRidePopPanelRef} className='w-full h-[85%] fixed z-10 bottom-0 translate-y-full  bg-white py-4 px-5'>
        <ConfirmRidePopUp setRidePopPanelOpen={setRidePopPanelOpen} setConfirmRidePopPanelOpen={setConfirmRidePopPanelOpen}/>
      </div>
    </div>
  )
}

export default CaptainHome
