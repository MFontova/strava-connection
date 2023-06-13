import React from "react";
import styles from "../index.css"

const ActivityItem = ({activity}) => {
    const date = new Date(activity.start_date)
    const elapsed_time = new Date(activity.elapsed_time * 1000)
    const minutes = elapsed_time.getMinutes()
    const seconds = elapsed_time.getSeconds()
    return (
        <div className="container-sm p-4 whitespace-nowrap truncate rounded basis-1/4 items-center border-2 min-w-400 w-2000">
            <h4 className="text-lg font-medium" title={activity.name}> {activity.name} </h4>
            <p className="text-sm"><i>{date.getDate()}/{date.getMonth()+1}/{date.getFullYear()} a las {date.getHours().toString()}:{date.getMinutes().toString().padStart(2, '0')}</i></p>
            <p> {(activity.distance / 1000).toFixed(2)} km </p>
            <p>Tiempo: {minutes}:{seconds} </p>
        </div>
    )
}

export default ActivityItem