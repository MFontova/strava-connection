import { useEffect, useState } from "react"
import styles from "./index.css"
import Header from "./components/Header"
import { getActivities } from "./providers/stravaProvider"
import axios from "axios"
import { LastActivitiesList } from "./components/LastActivitiesList"
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Bar, Doughnut } from 'react-chartjs-2';
import { Navigate, redirect } from "react-router-dom"
import Home from "./pages/home"

export const App = () => {  
  if(!document.cookie){
    return(
      <Navigate to={"/login"} />
    )
  }
  const cookies = document.cookie.split(';')
  
  const cookiesObj = {}
  cookies.forEach(pair => {
    const [key, value] = pair.split('=')
    cookiesObj[key.trim()] = value.trim()
  })


  if(!Object.keys(cookiesObj).includes('accessToken')){
    return (
      <Navigate to={"/login"} />
    )
  }

  
  // const activities = getActivities(cookiesObj.accessToken)
  return (
    <div>
      <Home accessToken={cookiesObj.accessToken}/>
      {/* {activities.length > 0 ? (
        <>
          <Header activitiesList={activities} />
          <LastActivitiesList activitiesList={activities} />
        </>
      ) : (
        <p>Cargando...</p>
      )} */}
    </div>
  );
}