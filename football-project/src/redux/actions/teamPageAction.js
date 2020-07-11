import axios from 'axios'
import {
  FETCH_TEAM_REQUEST,
  FETCH_TEAM_SUCCESS,
  FETCH_TEAM_FAILURE
} from './actionTypes'

export const fetchTeamPage = (teamid) => 
    async dispatch => {
        try {
            dispatch(fetchteamRequest())
            const config= {
                headers:{
                    'Access-Control-Allow-Origin': "*",
                    'x-auth-token':'80d452bcab9d43c98c1945408456ff2e'
                }
            }
            const response=await axios
            .get(`http://api.football-data.org/v2/teams/${teamid}`,config)
             // response.data is the team data
             const teamData = response.data
            //  console.log(teamData)
             dispatch(fetchteamSuccess(teamData))   
        } catch (error) {
           // error.message is the error message
          dispatch(fetchteamFailure(error.message)) 
        }
    }
  
  export const fetchteamRequest = () => {
    return {
      type: FETCH_TEAM_REQUEST
    }
  }
  
  export const fetchteamSuccess = teamData => {
    return {
      type: FETCH_TEAM_SUCCESS,
      payload: teamData
    }
  }
  
  export const fetchteamFailure = error => {
    return {
      type: FETCH_TEAM_FAILURE,
      payload: error
    }
  }