import { useLocation, useParams } from "react-router-dom"
import { rythm } from "../logic/rithmCalc"
import { getActivityById } from "../providers/stravaProvider"
import { useEffect, useState } from "react"
import { Bar, Line } from "react-chartjs-2"
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
  } from "chart.js";
    
  ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, BarElement, Title, Tooltip, Legend);

const ActivityDetail = () => {
    // const location = useLocation()
    // const {activity} = location.state || {}

    // if(!activity){
    //     return <div>No s'ha rebut cap activitat</div>
    // }

    const [activity, setActivity] = useState([])
    const [splitsDistanceArr, setSplitsDistance] = useState([])
    const [splitsTimeArr, setSplitsTime] = useState([])

    useEffect(() => {
        const fetchActivity = async () => {
            const id = window.location.href.split('/').pop()
            console.log(id)
            const response = await getActivityById(id)
            setActivity(response)
            const distance = splitsDistance(response)
            const time = splitsTime(response)
            setSplitsDistance(distance)
            setSplitsTime(time)
            // console.log(splitsDistance(response))
            // console.log(splitsTime(response))
        }
        fetchActivity()
    }, [])

    const splitsDistance = (activity) => {
        console.log(activity)
        return activity.splits_metric.map((split) => {
            return split.distance
        })
    }

    const splitsTime = (activity) => {
        return activity.splits_metric.map((split) => {
            return split.elapsed_time
        })
    }

    return(
        <>
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
        <section className="mx-100 flex justify-center pt-10 flex-col items-center">
            <h2 className="text-3xl pb-5">Ritmo por km</h2>
            <Bar 
                width={'500'}
                height={'300'}
                data={{
                    labels: splitsDistanceArr.map((_, index) => index + 1),
                    datasets: [{
                        label: 'Tiempo por km',
                        data: splitsTimeArr.map((time) =>rythm(time,1000)),
                        backgroundColor: "#10B981",
                        borderRadius: 10
                    }]
                }}
                options={{
                    responsive: false,
                    scales: {
                        y: {
                            min: 3,
                        }
                    },
                    plugins: {
                        legend: false
                    },
                }}
            />
        </section>
        
        </>
    )
}

export default ActivityDetail