import React from "react";
import TweetList from "../containers/TweetList";
import UserAside from "./UserAside"

const TweetTimeline= props => {
    return(
        <div className="row col-sm-12">
            <UserAside profileImgURL={props.profileImgURL} username={props.username}/>
            <TweetList/>
        </div>
    )
};

export default TweetTimeline;