import ActivityPage from "./components/ActivitiesList"
import styles from "./index.css"

export const App = () => {
    return(
        <div>
            <h1 className="text-3xl font-bold underline">Hello Strava</h1>
            <ActivityPage />
        </div>
    )
}