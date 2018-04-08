import React from "react";
import {Link} from "react-router-dom";
import TweetTimeline from "./TweetTimeline";

const Homepage = ({currentUser})=>{
    if(!currentUser.isAuthenticated) {
        return (
            <div className="home">
                <h1>Whats Happening?</h1>
                <h4>New to Wabler</h4>
                <Link to="/signup" className="btn btn-primary">
                    Sign Up here
                </Link>
            </div>
        )
    }else{
        return (
            <div>
                <TweetTimeline profileImgURL={currentUser.user.profileImgURL} username={currentUser.user.username}/>
            </div>
        )
    }
};

export default Homepage;