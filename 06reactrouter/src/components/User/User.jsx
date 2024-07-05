import React from 'react'
import { useParams } from 'react-router-dom'


function User() {
    const {userId} = useParams();
    return (
    <div className='text-center bg-gray-400 text-3xl'>User : {userId}</div>
  )
}

export default User