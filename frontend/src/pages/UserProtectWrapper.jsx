import React, { useContext, useEffect, useState } from 'react'

import { useNavigate } from 'react-router-dom'

const UserProtectWrapper = ({ children }) => {
    const {isLoading, setIsLoading} = useState(true);
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
                setCaptain(data.user);
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
