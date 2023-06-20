import axios from "axios"

const API_URL = "https://www.strava.com/api/v3"

const getAccessToken = () => {
    const cookies = document.cookie.split(';')

    console.log(cookies)
  
    const cookiesObj = {}
    cookies.forEach(pair => {
        const [key, value] = pair.split('=')
        cookiesObj[key.trim()] = value.trim()
    })
    console.log(cookiesObj)
    return cookiesObj.accessToken
}

export const getActivities = async (token) => {
    let config = {
        headers: {
            'Authorization': 'Bearer ' + token
        },
        params: {
            'per_page': 100
        }
    }
    return axios.get(API_URL + '/athlete/activities', config)
        .then( (response) => {
            console.log(response.data)
            return response.data
        })
        .catch( (error) => {
            throw error
        })
}

export const getActivityById = async (id) => {
    console.log(getAccessToken())
    const token = getAccessToken()
    let config = {
        headers: {
            'Authorization': 'Bearer ' + token
        }
    }
    return axios.get(API_URL + '/activities/' + id + '?include_all_efforts="true"', config)
        .then( (response) => {
            console.log(response)
            return response.data
        })
        .catch( (error) => {
            return error
            // throw error
        })
}