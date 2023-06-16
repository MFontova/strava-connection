import { Link, useNavigate } from "react-router-dom"

export const Login = () => {
    const url = `https://www.strava.com/oauth/authorize?client_id=${process.env.REACT_APP_CLIENT_ID}&redirect_uri=http://localhost:3000/redirect&response_type=code&scope=activity:read`
    return (
        // <button onClick={stravaRedirect}>Login con Strava</button>
        <a href={url}>Login con Strava</a>
    )
}