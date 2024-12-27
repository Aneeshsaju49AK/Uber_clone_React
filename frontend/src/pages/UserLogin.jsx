import React from 'react'
import { useState, useContext } from 'react'
import { Link , useNavigate} from 'react-router-dom'
import { UserDataContext } from '../context/UserContext'
import axios from 'axios'



function UserLogin() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    

    const {user, setUser} = useContext(UserDataContext);

    const navigate = useNavigate();

    
    const submitHandler = async (e)=>{
       e.preventDefault();
       const userData = {email: email, password: password}

       const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/users/login`, userData);

       if(response.status === 200){
           const data = response.data;
           setUser(data.user);
           localStorage.setItem('token', data.token);
           navigate('/home');
       }
       setEmail('');
       setPassword('');
    }
  return (
    <div className='p-7 h-screen flex flex-col justify-between'>
        <div>
        <img className='w-14 mb-10' src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png" alt="" />
        <form onSubmit={(e)=>{
            submitHandler(e);
        }}>
        <h3 className='text-lg font-medium mb-2'>What's your email</h3>
        <input value={email} onChange={(e)=>{
            setEmail(e.target.value);
        }} required className='bg-[#eeeeee] mb-5 rounded px-4 py-2 border w-full text-lg placeholder:text-base' type="email" placeholder='Email' />
        <h3 className='text-lg font-medium mb-2'>Enter your password</h3>
        <input value={password} onChange={(e)=>{
            setPassword(e.target.value);
        }} required className='bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base' type="password" placeholder='password' />
        <button className='bg-[#111] text-white font-semibold mb-2 rounded px-4 py-2 w-full text-lg placeholder:text-base'>Coutinue</button>
        <p className='text-center font-light text-sm'>New here? <Link to='/signup' className='text-blue-500'>Create new Account</Link></p>
        </form>
        </div>
        <div>
            <Link to="/captain-login" className='bg-[#10b461] flex items-center justify-center text-white font-semibold mb-7 rounded px-4 py-2 w-full text-lg placeholder:text-base'>Sign in as Captaion</Link>
        </div>
      
    </div>
  )
}

export default UserLogin
