import React, { useEffect, useState } from "react";
import { ReactDOM } from "react-dom/client";
import { getActivities } from "../providers/stravaProvider";
import ActivityItem from "./ActivityItem";
import styles from "../index.css"


const ActivityPage = () => {
    const [activities, setActivities] = useState([])

    useEffect(() => {
        const fetchActivities = async () => {
            try {
              // Obtener el token de acceso de Strava
              const accessToken = 'abfcbed0b59cd9887a60f908cfe88fc9f89896d0';
      
              // Obtener las actividades
              const data = await getActivities(accessToken);
              setActivities(data);
            } catch (error) {
              console.error(error);
            }
          };
      
          fetchActivities();
    }, [])

    console.log(activities)
    return (
        <div>
            <h2>Activities +7k</h2>
            <div className="flex flex-wrap gap-4 justify-center">
                {activities.filter((activity) => {
                    return activity.distance >= 7000 && activity.distance < 10000
                }).map( (activity) => {
                    return (
                        // <div key={activity.id} className="rounded basis-1/4 items-center border-2">
                            <ActivityItem activity={activity} key={activity.id} />
                        // </div>
                    )
                } )}
            </div>
            <h2>Activities +10k</h2>
            <div className="flex flex-wrap gap-4 justify-center">
                {activities.filter((activity) => {
                    return activity.distance >= 10000
                }).map( (activity) => {
                    return (
                        // <div key={activity.id} className="rounded basis-1/4 items-center border-2">
                            <ActivityItem activity={activity} key={activity.id} />
                        // </div>
                    )
                } )}
            </div>
        </div>
    )
}

export default ActivityPage