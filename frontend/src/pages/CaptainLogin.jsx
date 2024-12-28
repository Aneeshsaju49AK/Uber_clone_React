import React from 'react'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { CaptainDataContext } from '../context/CaptainContext'

const CaptainLogin = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { captain, setCaptain } = React.useContext(CaptainDataContext);
    const navigate = useNavigate();


    const submitHandler = async (e) => {
        e.preventDefault();
        const captain = { email: email, password: password }
        const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/captains/login`, captain);

        if (response.status === 200) {
            const data = response.data;
            setCaptain(data.captain);
            localStorage.setItem('token', data.token);
            navigate('/captain-home');
        }
        setEmail('');
        setPassword('');
    }
    return (
        <div className='p-7 h-screen flex flex-col justify-between'>
            <div>
                <img className='w-14 mb-10' src="https://www.svgrepo.com/show/505031/uber-driver.svg" alt="" />
                <form onSubmit={(e) => {
                    submitHandler(e);
                }}>
                    <h3 className='text-lg font-medium mb-2'>What's your email</h3>
                    <input value={email} onChange={(e) => {
                        setEmail(e.target.value);
                    }} required className='bg-[#eeeeee] mb-5 rounded px-4 py-2 border w-full text-lg placeholder:text-base' type="email" placeholder='Email' />
                    <h3 className='text-lg font-medium mb-2'>Enter your password</h3>
                    <input value={password} onChange={(e) => {
                        setPassword(e.target.value);
                    }} required className='bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base' type="password" placeholder='password' />
                    <button className='bg-[#111] text-white font-semibold mb-2 rounded px-4 py-2 w-full text-lg placeholder:text-base'>Coutinue</button>
                    <p className='text-center font-light text-sm'>join fleet? <Link to="/captain-signup" className='text-blue-500'>Register as a Captain</Link></p>
                </form>
            </div>
            <div>
                <Link to="/login" className='bg-[#d5622d] flex items-center justify-center text-white font-semibold mb-7 rounded px-4 py-2 w-full text-lg placeholder:text-base'>Sign in as User</Link>
            </div>

        </div>
    )
}

export default CaptainLogin
