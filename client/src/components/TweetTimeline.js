import React from "react";
import TweetList from "../containers/TweetList";
import UserAside from "./UserAside"
import TweetForm from "../containers/TweetForm"

const TweetTimeline = props => {
    return (
        <div className="col-sm-12">
            <div className="col-sm-12 add-tweet">
                <TweetForm/>
            </div>
            <div className="row col-sm-12">
                <UserAside profileImgURL={props.profileImgURL} username={props.username}/>
                <TweetList/>
            </div>
        </div>
    )
};

export default TweetTimeline;