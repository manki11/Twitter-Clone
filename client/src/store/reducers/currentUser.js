import {SET_CURRENT_USER} from "../actionTypes";

const DEFAULT_STATE = {
    isAuthenticated: false,
    user: {} // user info when logged in
};

export default (state = DEFAULT_STATE, action) => {
    switch (action.type) {
        case SET_CURRENT_USER:
            console.log(action);
            return {
                isAuthenticated: !!Object.keys(action.user).length,
                user: action.user
            };
        default:
            return state;
    }
}