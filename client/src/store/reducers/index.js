import {combineReducers} from "redux";
import currentUser from "./currentUser";
import errors from "./errors";
import tweets from "./tweets"

const rootReducer = combineReducers({
    currentUser,
    errors,
    tweets
});

export default rootReducer;