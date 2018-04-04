import React from "react";
import {Switch, Route, withRouter, Redirect} from "react-router-dom";
import {connect} from "react-redux"
import Homepage from "../components/Homepage"

const Main= props => {
    return(
        <div className="container">
            <Switch>
                <Route exact path="/" render={props=> <Homepage {...props}/>}></Route>
            </Switch>
        </div>
    )
};

function MapStateToProps(state) {
    return {
        currentUser: state.currentUser
    }
}


export default withRouter(connect(MapStateToProps, null)(Main));