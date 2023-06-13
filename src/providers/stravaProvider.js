import axios from "axios"

const API_URL = "https://www.strava.com/api/v3"

export const getActivities = async (token) => {
    let config = {
        headers: {
            'Authorization': 'Bearer ' + token
        }
    }
    axios.get(API_URL + '/athlete/activities', config)
        .then( (response) => {
            console.log(response)
            return response.data
        } )
}




    /*

export const getActivities = async (accessToken) => {
    const response = await fetch(`${API_URL}/athlete/activities`, {
        headers: {
            authorization: `Bearer ${accessToken}`
        }
    })

    if(!response.ok) {
        throw new Error('Error al obtener las actividades')
    } 

    const data = await response.json()
    return data.filter((activity) => {
        return activity.sport_type === 'Run'
    })
}
*/