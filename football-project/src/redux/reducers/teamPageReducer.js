import {
    FETCH_TEAM_REQUEST,
    FETCH_TEAM_SUCCESS,
    FETCH_TEAM_FAILURE
  } from "../actions/actionTypes"

  const initialState = {
    loading: false,
    teamData: [],
    error: ''
  }

  export const teamDataReducer = (state = initialState, action) => {
    switch (action.type) {
      case FETCH_TEAM_REQUEST:
        return {
          ...state,
          loading: true
        }
      case FETCH_TEAM_SUCCESS:
        return {
          loading: false,
          teamData: action.payload,
          error: ''
        }
      case FETCH_TEAM_FAILURE:
        return {
          loading: false,
          teamData: [],
          error: action.payload
        }
      default: return state
    }
  }
  