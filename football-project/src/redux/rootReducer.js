import {combineReducers} from 'redux';
import {teamDataReducer}  from "./reducers/teamPageReducer";
import {teamsReducer} from "./reducers/teamsReducer";

const rootReducer= combineReducers({
    teamData:teamDataReducer,
    teams:teamsReducer
})

export default rootReducer