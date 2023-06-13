import { useEffect, useState } from "react"
import styles from "./index.css"
import Header from "./components/Header"
import { getActivities } from "./providers/stravaProvider"
import axios from "axios"
import { LastActivitiesList } from "./components/LastActivitiesList"

export const App = () => {
    const [activities, setActivities] = useState([])

    const fetchActivities = () => {

        const config = {
            method: 'get',
            maxBodyLength: Infinity,
            url: 'https://www.strava.com/api/v3/athlete/activities',
            headers: { 
              'Authorization': 'Bearer 25cb262a6d3d31acbc5f40cc16625aabe35d7de9', 
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


    return(
        <div>
            <Header activitiesList={activities} />
            <LastActivitiesList activitiesList={activities} />
        </div>
    )
}