import React from "react";
import Moment from "react-moment";
import {Link} from "react-router-dom";
import defaultProfileImg from "../images/default-profile-image.jpg";

const TweetItem = ({date, profileImgURL, text, username, removeTweet}) => (
    <div>
        <li className="list-group-item">
            <img
                src={profileImgURL || defaultProfileImg}
                alt={username}
                height="100"
                width="100"
                className="timeline-image"/>
            <div className="tweet-area">
                <Link to="/">@{username} &nbsp;</Link>
                <span className="text-muted">
                    <Moment className="text-muted" format="Do MM YYYY">
                        {date}
                    </Moment>
                </span>
                <p>{text}</p>
                <a className="btn btn-danger" onClick={removeTweet}>Delete</a>
            </div>
        </li>
    </div>
);

export default TweetItem;