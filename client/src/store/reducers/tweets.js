import {LOAD_TWEETS, REMOVE_TWEETS} from "../actionTypes"


const tweets=(state=[], actions)=> {
    switch(actions.type){
        case LOAD_TWEETS:
            return [...actions.tweets];
        case REMOVE_TWEETS:
            return state.filter(tweet=> tweet._id!== actions.id);
        default:
            return state;
    }
}

export default tweets;