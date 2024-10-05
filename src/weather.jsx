import { useState } from "react"
import axios from "axios"
import cloud from "../src/asset/image/cloud.png"
function Weather(){

    const[city,setcity]=useState("")
    const[weather,setweather]=useState("")
    const[temperature,settemperature]=useState("")
    const[description,setdescription]=useState("")
    function handleCity(event){
        setcity(event.target.value)
    }

    function getweather(){
        var weatherdata = axios(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=5b87674f2674a5177a861c6ef855be83`)
weatherdata.then(function(success){
    console.log(success.data)
    setweather(success.data.weather[0].main)
    setdescription(success.data.weather[0].description)
    settemperature(success.data.main.temp)
})

    }

    return(
        <div className="bg-white p-20">
            <div className="bg-sky-800 p-10 rounded-md"> 
                <img src = {cloud}></img>
                <h1 className="text-2xl font-medium">Weather Report</h1>
                <p>I can give you a Weather Report about your City!</p>
                <input onChange={handleCity}type="text" className="mt-2 border border-black rounded-md p-1 outline-5 flex"placeholder="🔎Enter Your City"></input>
                <button  onClick={getweather}className="bg-black text-white p-2 rounded-md mt-2">Get Report</button>
                <div className="mt-2">
                    <p><b>Weather:</b>{weather}</p>
                    <p><b>Temperature:</b>{temperature}</p>
                    <p><b>Description:</b>{description}</p>

                </div>
            </div>
        </div>
    )
}
export default Weather