import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'


function Github() {
    // const [data, setData] = useState([]);
  const data = useLoaderData();
    // useEffect( ()=> {
    //     fetch('https://api.github.com/users/princemishraji/followers')
    //     .then(res => res.json())
    //     .then(data => {
    //         console.log(data);
    //         setData(data);
    //     })
    // }, [])
  return (
    <div className='text-3xl bg-violet-700 text-center'>Github Followers : {data.length} </div>
  )
}

export default Github

export const githubInfo = async () => {
  const res = await fetch('https://api.github.com/users/princemishraji/followers')
  return res.json()
}