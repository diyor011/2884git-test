import React, { useEffect, useState } from 'react'

const Weather = () => {
  const API = "b2bf880ac4c587aa802e7b20d3d2c633"
  let city = "Tashkent"
  const [weath, setWeath] = useState(null)

  const Getweather = async () => {
    try {
      const req = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API}&units=metric`)
      const res = await req.json()
      console.log(res);
      setWeath(res)
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    Getweather()
  }, [])

  if (!weath) {
    return <div className="text-white">Загрузка...</div>
  }

  const weatherInfo = weath.weather[0];

  return (
  
    <div className='flex justify-center items-center h-screen w-screen gap-8'>
      <div className='flex items-center bg-white p-6 rounded-2xl shadow-xl'>
        <div className="flex items-center pr-6 border-r border-slate-200">
          <img 
            className="w-24 h-24 object-contain" 
            src={`https://openweathermap.org/img/wn/${weatherInfo.icon}@2x.png`} 
            alt={weatherInfo.description}
          />
          <h2 className="text-3xl font-bold text-slate-800 ml-2">
            {`${Math.round(weath.main.temp)}°С`}
          </h2>
        </div>
        
        <div className="flex flex-col items-start pl-6 text-slate-700">
          <h2 className="text-2xl font-bold text-slate-900">{city}</h2>
          <h2 className="text-lg font-medium capitalize mt-1">{weatherInfo.main}</h2>
          <h2 className="text-sm text-slate-400 capitalize">{weatherInfo.description}</h2>
          <h2 className="text-xs text-slate-400 mt-2">
            {`Фаренгейт: ${Math.floor(weath.main.temp * 9/5 + 32)}°F`}
          </h2>
        </div>

      </div>

    </div>

  )
}

export default Weather
