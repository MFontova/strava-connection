import axios from "axios"

const API_URL = "https://www.strava.com/api/v3"

export const getActivities = async (token) => {
    let config = {
        headers: {
            'Authorization': 'Bearer ' + token
        }
    }
    return axios.get(API_URL + '/athlete/activities', config)
        .then( (response) => {
            return response.data
        })
        .catch((error) => {
            throw error
        })
}