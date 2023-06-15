import { useEffect, useState } from "react"
import styles from "./index.css"
import Header from "./components/Header"
import { getActivities } from "./providers/stravaProvider"
import axios from "axios"
import { LastActivitiesList } from "./components/LastActivitiesList"
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Bar, Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
  labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
  datasets: [
    {
      label: '# of Votes',
      data: [12, 19, 3, 5, 2, 3],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)',
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)',
      ],
      borderWidth: 1,
    },
  ],
};
export const App = () => {
    const [activities, setActivities] = useState([])
    console.log(sessionStorage.getItem('accessToken'))
    const fetchActivities = () => {
        const config = {
            method: 'get',
            maxBodyLength: Infinity,
            url: 'https://www.strava.com/api/v3/athlete/activities',
            headers: { 
              'Authorization': 'Bearer '+sessionStorage.getItem('accessToken'), 
            }
          };
          
          axios(config)
          .then(function (response) {
            console.log(response.data);
            setActivities(response.data)
          })
          .catch(function (error) {
            console.log(error);
          });
        
    };

    useEffect(() => {
        fetchActivities();
    }, [])

    const dataa = {
      labels: ['a', 'b', 'c'],
      datasets: {
        label: 'Prueba',
        data: [8,5,3]
      }
    }
    return (
      <div>
        {activities.length > 0 ? (
          <>
            <Header activitiesList={activities} />
            <LastActivitiesList activitiesList={activities} />
            <Doughnut data={data} />
            <Bar data={dataa} />
          </>
        ) : (
          <p>Cargando...</p>
        )}
      </div>
    );
}