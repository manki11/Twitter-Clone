import {LOAD_TWEETS, REMOVE_TWEETS} from "../actionTypes"


const tweets=(state=[], actions)=> {
    switch(actions.type){
        case LOAD_TWEETS:
            return [...actions.tweets];
        default:
            return state;
    }
}

export default tweets;