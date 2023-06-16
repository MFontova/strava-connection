import { useLocation, useParams } from "react-router-dom"
import { rythm } from "../logic/rithmCalc"

const ActivityDetail = () => {
    const location = useLocation()
    const {activity} = location.state || {}

    if(!activity){
        return <div>No s'ha rebut cap activitat</div>
    }

    console.log(activity)
    
    return(
        <section className="bg-emerald-500 py-4">
            <h1 className="text-white text-center text-5xl font-bold py-9">{activity.name}</h1>
            <div className="flex justify-center gap-32 text-white">
                <div className="flex flex-col">
                    <i className="bi bi-arrow-right text-4xl text-center"></i>
                    <p className="text-lg">{(activity.distance / 1000).toFixed(2)} <span className="text-sm">km</span></p>
                </div>
                <div className="flex flex-col">
                    <i className="bi bi-clock text-4xl text-center"></i>
                    <p className="text-lg">{Math.trunc(activity.moving_time/60)} <span className="text-sm">min</span></p>
                </div>
                <div className="flex flex-col">
                    <i className="bi bi-fire text-4xl text-center"></i>
                    <p className="text-lg">{rythm(activity.moving_time, activity.distance)} <span className="text-sm">min/km</span></p>
                </div>
            </div>
        </section>
    )
}

export default ActivityDetail