const Home = () => {
    const REACT_APP_CLIENT_ID = 108913;
    const redirectUrl = "http://localhost:3000/redirect";
    const scope = "read"

    console.log(REACT_APP_CLIENT_ID)
    const handleLogin = () => {
        window.location = `http://www.strava.com/oauth/authorize?client_id=${REACT_APP_CLIENT_ID}&response_type=code&redirect_uri=${redirectUrl}/exchange_token&approval_prompt=force&scope=${scope}`;
    }

    return(
        <div>
            <h1>Home</h1>
            <button onClick={handleLogin}>Connect with Strava</button>
        </div>
    )
}

export default Home