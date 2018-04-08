import React from "react";
import TweetList from "../containers/TweetList";

const TweetTimeline= props => {
    return(
        <div className="row">
            <TweetList/>
        </div>
    )
};

export default TweetTimeline;