import React from "react";
import defaultProfileImg from "../images/default-profile-image.jpg";

const UserAside = ({profileImgURL, username}) => (
    <aside className="col-sm-4">
        <div className="panel panel-default">
            <img src={profileImgURL || defaultProfileImg} height="200" width="200"/>
            <p>{username}</p>
        </div>
    </aside>
);

export default UserAside;