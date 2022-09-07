import { combineReducers } from "redux";
import userReducers from "./reducer";

const rootReducer=combineReducers({
    usersR: userReducers
    
})

export default rootReducer;