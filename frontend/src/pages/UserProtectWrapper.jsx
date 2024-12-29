import React, { useContext, useEffect, useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom'
import { UserDataContext } from '../context/UserContext';

const UserProtectWrapper = ({ children }) => {
    const {user, setUser} = useContext(UserDataContext);
    const [isLoading, setIsLoading] = useState(true);
    const token = localStorage.getItem('token');
    const navigate = useNavigate();
    
    
    useEffect(() => {
        if (!token) {
            navigate('/login');
        }
        axios.get(`${import.meta.env.VITE_BASE_URL}/users/profile`,{
            headers:{
                'Authorization': `Bearer ${token}`
            }
        }).then((response)=>{
            if(response.status === 200){
                const data = response.data;
                setUser(data.user);
                setIsLoading(false);
            }
        }).catch((error)=>{
            console.log(error);
            localStorage.removeItem('token');
            navigate('/login');
        })
    }, [token]);
    if(isLoading){
        return <div>Loading...</div>
    }
    return (
        <>
            {children}
        </>
    )
}

export default UserProtectWrapper
