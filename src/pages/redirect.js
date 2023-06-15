import axios from "axios"
import { Link, Navigate, useParams, useSearchParams } from "react-router-dom"

const Redirect = ({setCode}) => {
    const [searchParams, setSearchParams] = useSearchParams()
    console.log(searchParams.get("code"))
    sessionStorage.setItem("code", searchParams.get("code"))
    
    let config = {
        method: 'post',
        maxBodyLength: Infinity,
        url: 'https://www.strava.com/oauth/token?client_id=108913&client_secret=1c49f208dec7ecf29fd76c75fea8fdcbe03ce19c&code='+searchParams.get("code")+'&grant_type=authorization_code',
        headers: { 
        }
      };
      
      axios.request(config)
      .then((response) => {
        console.log(JSON.stringify(response.data));
        const accessToken = response.data.access_token
        console.log(accessToken)
        sessionStorage.setItem('accessToken',accessToken)
      })
      .catch((error) => {
        console.log(error);
      });

    return(
        <Link to={'/'}>Go home</Link>
    )
}

export default Redirect