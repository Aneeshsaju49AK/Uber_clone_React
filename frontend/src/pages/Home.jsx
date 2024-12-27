import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
      <div className=' bg-[url(https://media.istockphoto.com/id/1268054405/vector/route-planning-city-driving-road-network-destination-map.jpg?s=612x612&w=0&k=20&c=fFAXAL-udAnyNMc03hDYeVl3fg7LJyGu3XG-6xPi58o=)] h-screen pt-8 w-full flex justify-between flex-col'>
        <img className='w-14 ml-8' src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png" alt="" />
        <div className='bg-white pb-7 py-4 px-4'>
            <h2 className='text-3xl font-bold'>Get Started with Uber</h2>
            <Link to='/login' className='flex items-center justify-center w-full bg-black text-white py-3 rounded mt-4'>Coutinue</Link>
        </div>
      </div>
    </div>
  )
}

export default Home
