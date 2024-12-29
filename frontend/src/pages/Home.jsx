import React, { useState, useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import 'remixicon/fonts/remixicon.css'
import LocationSearchPanel from '../components/LocationSearchPanel'
import VehiclePanel from '../components/VehiclePanel'
import ConfirmRide from '../components/ConfirmRide'
import LookingForDriver from '../components/LookingForDriver'
import WaitingForDriver from '../components/WaitingForDriver'

const Home = () => {
  const { pickup, setPickup } = useState('');
  const { destination, setDestination } = useState('');
  const [panelOpen, setPanelOpen] = useState(false);
  const panelRef = useRef(null);
  const vehiclePanelRef = useRef(null);
  const panelCloseRef = useRef(null);
  const [vehiclePanel, setVehiclePanel] = useState(false);
  const [confirmPanelOpen, setConfirmPanelOpen] = useState(false);
  const confirmPanelRef = useRef(null);
  const [lookingRidePanelOpen, setLookingRidePanelOpen] = useState(false);
  const lookingRidePanelRef = useRef(null);
  const [waitingPanelOpen, setWaitingRidePanelOpen] = useState(false);
  const waitingRidePanelRef = useRef(null);

  const submitHandler = (e) => {
    e.preventDefault();
    console.log('submitted');
  }

  useGSAP(() => {
    if (panelOpen) {
      gsap.to(panelRef.current, {
        height: "70%",
        padding: "24px"

      })
      gsap.to(panelCloseRef.current, {
        opacity: 1,
      })
    } else {
      gsap.to(panelRef.current, {
        height: "0%",
        padding: "0px"
      })
      gsap.to(panelCloseRef.current, {
        opacity: 0,
      })
    }
  }, [panelOpen]);

  useGSAP(() => {
    if (vehiclePanel) {
      gsap.to(vehiclePanelRef.current, {
        translateY: "0%"
      })
    } else {
      gsap.to(vehiclePanelRef.current, {
        translateY: "100%"
      })
    }
  }, [vehiclePanel])
  useGSAP(() => {
    if (confirmPanelOpen) {
      gsap.to(confirmPanelRef.current, {
        translateY: "0%"
      })
    } else {
      gsap.to(confirmPanelRef.current, {
        translateY: "100%"
      })
    }
  }, [confirmPanelOpen])

  useGSAP(() => {
    if (lookingRidePanelOpen) {
      gsap.to(lookingRidePanelRef.current, {
        translateY: "0%"
      })
    } else {
      gsap.to(lookingRidePanelRef.current, {
        translateY: "100%"
      })
    }
  }, [lookingRidePanelOpen])

  useGSAP(() => {
    if (waitingPanelOpen) {
      gsap.to(waitingRidePanelRef.current, {
        translateY: "0%"
      })
    } else {
      gsap.to(waitingRidePanelRef.current, {
        translateY: "100%"
      })
    }
  }, [waitingPanelOpen])

  return (
    <div className='h-screen relative overflow-hidden'>
      <img className='w-16 absolute left-5 top-5' src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png" alt="" />
      <div className='h-screen w-screen'>
        <img className='h-full w-full' src="https://media.istockphoto.com/id/1268054405/vector/route-planning-city-driving-road-network-destination-map.jpg?s=612x612&w=0&k=20&c=fFAXAL-udAnyNMc03hDYeVl3fg7LJyGu3XG-6xPi58o=" alt="" />
      </div>
      <div className='flex flex-col justify-end absolute w-full top-0  h-screen  '>
        <div className='h-[30%]  bg-white p-5 rounded-t-lg relative'>
          <h5 ref={panelCloseRef} onClick={() => {
            setPanelOpen(false);
          }} className='absolute opacity-0 top-3 right-4 text-xl'><i className="ri-arrow-down-wide-line"></i></h5>
          <h4 className='text-2xl font-semibold'>Find a trip</h4>
          <form onSubmit={(e) => {
            submitHandler(e);
          }} >
            <div className="line absolute h-16 bg-gray-800 rounded-full w-1 top-[43%] left-10"></div>
            <input
              onClick={() => {
                setPanelOpen(true);
              }}
              value={pickup}
              onChange={(e) => {
                setPickup(e.target.value);
              }}
              className='bg-[#eee] px-12 py-2 text-lg rounded-lg mt-3 w-full'
              type="text"
              placeholder='Add a pick-up location' />
            <input
              onClick={() => {
                setPanelOpen(true);
              }}
              value={destination}
              onChange={(e) => {
                setDestination(e.target.value);
              }}
              className='bg-[#eee] px-12 py-2 text-lg rounded-lg mt-5 w-full'
              type="text"
              placeholder='Enter your destination' />
          </form>
        </div>
        <div ref={panelRef} className=' h-0 bg-white '>
          <LocationSearchPanel setPanelOpen={setPanelOpen} setVehiclePanel={setVehiclePanel} />
        </div>

      </div>
      <div ref={vehiclePanelRef} className='w-full fixed z-10 bottom-0 translate-y-full bg-white py-4 px-5'>
        <VehiclePanel setConfirmPanelOpen={setConfirmPanelOpen} setVehiclePanel={setVehiclePanel}/>
      </div>
      <div ref={confirmPanelRef} className='w-full fixed z-10 bottom-0 translate-y-full bg-white py-4 px-5'>
        <ConfirmRide  setConfirmPanelOpen={setConfirmPanelOpen} setLookingRidePanelOpen={setLookingRidePanelOpen}/>
      </div>
      <div ref={lookingRidePanelRef} className='w-full fixed z-10 bottom-0 translate-y-full bg-white py-4 px-5'>
        <LookingForDriver setLookingRidePanelOpen={setLookingRidePanelOpen} setWaitingRidePanelOpen={setWaitingRidePanelOpen}/>
      </div>
      <div ref={waitingRidePanelRef} className='w-full fixed z-10 bottom-0 translate-y-full bg-white py-4 px-5'>
        <WaitingForDriver setWaitingRidePanelOpen={setWaitingRidePanelOpen}/>
      </div>
    </div>
  )
}

export default Home
