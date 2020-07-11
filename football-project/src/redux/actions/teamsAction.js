import axios from 'axios'
import {
  FETCH_TEAMS_REQUEST,
  FETCH_TEAMS_SUCCESS,
  FETCH_TEAMS_FAILURE
} from './actionTypes'

export const fetchTeams = () => 
    async dispatch => {
        try {
            dispatch(fetchteamsRequest())
            const config= {
                headers:{
                    'Access-Control-Allow-Origin': "*",
                    'x-auth-token':'80d452bcab9d43c98c1945408456ff2e'
                }
            }
            const response=await axios
            .get('http://api.football-data.org/v2/teams',config)
             // response.data is the teams
             const teams = response.data.teams
            //  console.log(teams)
             dispatch(fetchteamsSuccess(teams))   
        } catch (error) {
           // error.message is the error message
          dispatch(fetchteamsFailure(error.message)) 
        }
    }
  
  export const fetchteamsRequest = () => {
    return {
      type: FETCH_TEAMS_REQUEST
    }
  }
  
  export const fetchteamsSuccess = teams => {
    return {
      type: FETCH_TEAMS_SUCCESS,
      payload: teams
    }
  }
  
  export const fetchteamsFailure = error => {
    return {
      type: FETCH_TEAMS_FAILURE,
      payload: error
    }
  }