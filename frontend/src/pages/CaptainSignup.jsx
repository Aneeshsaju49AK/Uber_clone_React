import React from 'react'
import { useState } from 'react'
import { Link , useNavigate} from 'react-router-dom'
import { CaptainDataContext} from '../context/CaptainContext.jsx'
import axios from 'axios'

function CaptainSignup() {
    const navigate = useNavigate();
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [vehicleColor, setVehicleColor] = useState('');
    const [vehiclePlate, setVehiclePlate] = useState('');
    const [vehicleCapacity, setVehicleCapacity] = useState('');
    const [vehicleType, setVehicleType] = useState('');
    
    const {captain, setCaptain} =React.useContext(CaptainDataContext);

    const submitHandler = async (e) => {
        e.preventDefault();
        const userData = {
            fullname: {
                firstname: firstName,
                lastname: lastName
            },
            email,
            password,
            vehicle: {
                color: vehicleColor,
                plate: vehiclePlate,
                capacity: vehicleCapacity,
                vehicleType: vehicleType
            }
        };
        const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/captains/register`, userData);

        if(response.status === 201){
            const data = response.data;
            setCaptain(data.captain);
            localStorage.setItem('token', data.token);
            navigate('/captain-home');
        }
        setFirstName('');
        setLastName('');
        setEmail('');
        setPassword('');
        setVehicleColor('');
        setVehiclePlate('');
        setVehicleCapacity('');
        setVehicleType('');
    }
    return (
        <div className='p-7 h-screen flex flex-col justify-between'>
            <div>
                <img className='w-14 mb-3' src="https://www.svgrepo.com/show/505031/uber-driver.svg" alt="" />
                <form onSubmit={(e) => {
                    submitHandler(e);
                }}>
                    <h3 className='text-base font-medium mb-2'>What's your name</h3>
                    <div className='flex  gap-5'>
                        <input value={firstName} onChange={(e) => {
                            setFirstName(e.target.value);
                        }} required className='bg-[#eeeeee] mb-2 w-1/2 rounded px-4 py-2 border text-base placeholder:text-base' type="text" placeholder='First name' />
                        <input value={lastName} onChange={(e) => {
                            setLastName(e.target.value);
                        }} required className='bg-[#eeeeee] mb-2 w-1/2 rounded px-4 py-2 border text-base placeholder:text-base' type="text" placeholder='Last name' />
                    </div>
                    <h3 className='text-base font-medium mb-2'>What's your email</h3>
                    <input value={email} onChange={(e) => {
                        setEmail(e.target.value);
                    }} required className='bg-[#eeeeee] mb-2 rounded px-4 py-2 border w-full text-base placeholder:text-base' type="email" placeholder='Email' />
                    <h3 className='text-base font-medium mb-2'>Enter your password</h3>
                    <input value={password} onChange={(e) => {
                        setPassword(e.target.value);
                    }} required className='bg-[#eeeeee] mb-2 rounded px-4 py-2 border w-full text-base placeholder:text-base' type="password" placeholder='password' />
                    <h3 className='text-base font-medium mb-2'>Vehicle Information</h3>
                    <div className='flex  gap-5'>
                        <input value={vehicleColor} onChange={(e) => {
                            setVehicleColor(e.target.value);
                        }} required className='bg-[#eeeeee] mb-2 w-1/2 rounded px-4 py-2 border text-base placeholder:text-base' type="text" placeholder='Vehicle color' />
                        <input value={vehiclePlate} onChange={(e) => {
                            setVehiclePlate(e.target.value);
                        }} required className='bg-[#eeeeee] mb-2 w-1/2 rounded px-4 py-2 border text-base placeholder:text-base' type="text" placeholder='Vehicle plate' />
                    </div>
                    <div className='flex  gap-5 mb-3'>
                        <input value={vehicleCapacity} onChange={(e) => {
                            setVehicleCapacity(e.target.value);
                        }} required className='bg-[#eeeeee] mb-2 w-1/2 rounded px-4 py-2 border text-base placeholder:text-base' type="text" placeholder='Vehicle capacity' />
                        <select 
                        required
                        className='bg-[#eeeeee] mb-2 w-1/2 rounded px-4 py-2 border text-sm text-gray-500 placeholder:text-base' type="text" placeholder='Vehicle color' 
                        value={vehicleType}
                        onChange={(e) => {
                            setVehicleType(e.target.value);
                        }}
                        >
                            <option value=''disabled>Select vehicle</option>
                            <option value='car'>Car</option>
                            <option value='auto'>Auto</option>
                            <option value='moto'>Moto</option>
                        </select>
                    </div>

                    <button className='bg-[#111] text-white font-semibold mb-2 rounded px-4 py-2 w-full text-lg placeholder:text-base'>Coutinue</button>
                    <p className='text-center font-light text-sm'>Already have account? <Link to="/captain-login" className='text-blue-500'>Login here</Link></p>
                </form>
            </div>
            <div>
                <p className='text-[12px]'>This site is protected by reCAPTCHA and the <span className='underline'>Google Privacy Policy</span> and <span className='underline'>Terms of Service apply.</span></p>
            </div>

        </div>
    )
}

export default CaptainSignup
