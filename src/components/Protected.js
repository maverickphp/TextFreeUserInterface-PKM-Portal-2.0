import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom'

const Protected = ({ Component }) => {
    const navigate = useNavigate();
    const { token } = useSelector(state => state.auth);
    useEffect(() => {
      if(!token){
        navigate('/sign-in')
      }
    }, [navigate, token])
    
  return (
    <Component />
  )
}

export default Protected