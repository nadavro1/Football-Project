import {
    FETCH_TEAMS_REQUEST,
    FETCH_TEAMS_SUCCESS,
    FETCH_TEAMS_FAILURE
  } from "../actions/actionTypes"

  const initialState = {
    loading: false,
    teams: [],
    error: ''
  }

  export const teamsReducer = (state = initialState, action) => {
    switch (action.type) {
      case FETCH_TEAMS_REQUEST:
        return {
          ...state,
          loading: true
        }
      case FETCH_TEAMS_SUCCESS:
        return {
          loading: false,
          teams: action.payload,
          error: ''
        }
      case FETCH_TEAMS_FAILURE:
        return {
          loading: false,
          teams: [],
          error: action.payload
        }
      default: return state
    }
  }
  