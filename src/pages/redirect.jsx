import axios from "axios"
import { Link, Navigate, useParams, useSearchParams } from "react-router-dom"

const Redirect = () => {
    const [searchParams, setSearchParams] = useSearchParams()
    sessionStorage.setItem("code", searchParams.get("code"))
    
    let config = {
        method: 'post',
        maxBodyLength: Infinity,
        url: `https://www.strava.com/oauth/token?client_id=${process.env.REACT_APP_CLIENT_ID}&client_secret=${process.env.REACT_APP_CLIENT_SECRET}&code=${searchParams.get("code")}&grant_type=authorization_code`,
        headers: { 
        }
      };
      
      axios.request(config)
      .then((response) => {
        const accessToken = response.data.access_token
        const refreshToken = response.data.refresh_token
        document.cookie = `refreshToken=${refreshToken}`
        document.cookie = `accessToken=${accessToken}`
      })
      .catch((error) => {
      });

    return(
      <Navigate to={"/"} />
    )
}

export default Redirect