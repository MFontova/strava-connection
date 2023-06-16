import { Link, Navigate, useNavigate } from "react-router-dom"
import { rythm } from "../logic/rithmCalc"

export const LastActivity = ({activity}) => {
    // console.log(rythm(time, distance))
    return (
        <Link 
            to={`/activity/${activity.id}`}
            state={{activity: activity}}
            // to={{
            //     pathname: `/activity/${activity.id}`,
            //     state: {activity: activity}
            // }} key={activity.id}
        >
            <div className="border rounded p-5">
                <h3 className="text-center text-xl underline">{activity.name}</h3>
                <div className="flex flex-row justify-center gap-3">
                    <p>{(activity.distance/1000).toFixed(2)}km</p>
                    <p>·</p>
                    <p>{Math.trunc(activity.moving_time/60)}min</p>
                    <p>·</p>
                    <p>{rythm(activity.moving_time, activity.distance)} min/km</p>
                </div>
            </div>
        </Link>
    )
}