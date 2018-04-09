import {apiCall} from "../../services/api";
import {addError} from "./errors"
import {LOAD_TWEETS, REMOVE_TWEETS} from "../actionTypes";

export const loadTweets = tweets=> ({
    type: LOAD_TWEETS,
    tweets
});

export const remove= id => ({
    type: REMOVE_TWEETS,
    id
});

export const deleteTweet= (user_id, tweet_id) => {
    return dispatch => {
        return apiCall("delete", `/api/users/${user_id}/tweets/${tweet_id}`)
            .then(()=> dispatch(remove(tweet_id)))
            .catch(err=> addError(err))
    }
};

export const fetchTweets= ()=> {
    return dispatch=> {
        return apiCall("get", "/api/tweets")
            .then((res)=> (dispatch(loadTweets(res))))
            .catch(err=> addError(err))
    }
};

export const postNewTweet= text=> (dispatch, getState)=> {
    let {currentUser}= getState();
    const id= currentUser.user.id;
    return apiCall("post",`/api/users/${id}/tweets`, {text})
        .then(res=> {})
        .catch(err => addError(err))
};
