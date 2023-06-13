import { LastActivity } from "./LastActivity"
import { Chart } from "chart.js"

export const LastActivitiesList = ({activitiesList}) => {
    console.log(activitiesList)

    return (
        <div className="grid grid-cols-3 gap-6 mx-10 mt-10">
        {activitiesList.slice(0,3).map( (activity) => {
            return (
                <LastActivity activity={activity} key={activity.id}/>
            )
        } )}
        </div>
    )
}