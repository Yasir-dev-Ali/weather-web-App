import React, { useState } from 'react'
import { getWeather } from './Api'


const Weather = () => {
  const [city,setCity]=useState("")
  const [weather,setWeather]=useState({})

  const handleChange= async (e)=>{
   const weatherData=  await getWeather(city);
    setWeather(weatherData)
    setCity("")
  }

  
  return (
    <>
     {/*  Good Designe Weather app in tailwind css */}
      <div className="flex justify-center items-center h-screen bg-gray-200">
        <div className="bg-white p-8 rounded shadow-md w-1/2">
          <h1 className="text-2xl font-bold mb-4">Weather App</h1>
          <div className="flex items-center justify-between">
            <input type="text" className="w-3/4 p-2 border border-gray-300 rounded" placeholder="Enter city name" value={city}  onChange={(e)=>setCity(e.target.value) }/>
            <button className="bg-blue-500 text-white p-2 rounded"
             onClick={()=> handleChange()}>Search</button>
          </div>
          <div className="mt-8">
            <h2 className="text-xl font-bold">City Name</h2>
            <div className="flex items-center justify-between">
              <h3 className="text-lg">Temperature: 25°C</h3>
              <h3 className="text-lg">Weather: Cloudy</h3>
            </div>
          </div>
        </div>
      </div>



    

     
          
    </>
  )
}

export default Weather