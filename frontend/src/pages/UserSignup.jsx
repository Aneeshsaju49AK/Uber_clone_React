import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'

function UserSignup() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [userData, setUserData] = useState({});

    const submitHandler = (e) => {
        e.preventDefault();
        setUserData({ fullName: { firstName: firstName, lastName: lastName, }, email: email, password: password });
        console.log(userData);
        setFirstName('');
        setLastName('');
        setEmail('');
        setPassword('');
    }
    return (
        <div className='p-7 h-screen flex flex-col justify-between'>
            <div>
                <img className='w-14 mb-10' src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png" alt="" />
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
                    }} required className='bg-[#eeeeee] mb-5 rounded px-4 py-2 border w-full text-base placeholder:text-base' type="email" placeholder='Email' />
                    <h3 className='text-base font-medium mb-2'>Enter your password</h3>
                    <input value={password} onChange={(e) => {
                        setPassword(e.target.value);
                    }} required className='bg-[#eeeeee] mb-5 rounded px-4 py-2 border w-full text-base placeholder:text-base' type="password" placeholder='password' />
                    <button className='bg-[#111] text-white font-semibold mb-2 rounded px-4 py-2 w-full text-lg placeholder:text-base'>Coutinue</button>
                    <p className='text-center font-light text-sm'>Already have account? <Link to="/login" className='text-blue-500'>Login here</Link></p>
                </form>
            </div>
            <div>
                <p className='text-[10px]'>By proceeding, you consent to get calls, WhatsApp or SMS message, including by automated means, from Uber and its  affiliates to the number provided.</p>
            </div>

        </div>
    )
}

export default UserSignup
