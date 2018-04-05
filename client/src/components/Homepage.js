import React from "react";
import {Link} from "react-router-dom";

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
                <h1>You made it!</h1>
            </div>
        )
    }
};

export default Homepage;