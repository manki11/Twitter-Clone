import {LOAD_TWEETS, REMOVE_TWEETS, ADD_TWEET} from "../actionTypes"


const tweets=(state=[], actions)=> {
    switch(actions.type){
        case LOAD_TWEETS:
            return [...actions.tweets];
        case ADD_TWEET:
            return [, actions.tweet,...state];
        case REMOVE_TWEETS:
            return state.filter(tweet=> tweet._id!== actions.id);
        default:
            return state;
    }
};

export default tweets;