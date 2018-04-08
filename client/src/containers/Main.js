import React from "react";
import {Switch, Route, withRouter, Redirect} from "react-router-dom";
import {connect} from "react-redux";
import Homepage from "../components/Homepage";
import AuthForm from "../components/AuthForm";
import {authUser} from "../store/actions/auth";
import { removeError } from "../store/actions/errors";
import withAuth from "../hocs/withAuth";

const Main= props => {
    const {authUser, errors, removeError, currentUser }= props;
    return(
        <div className="container">
            <Switch>
                <Route exact path="/" render={props=> <Homepage currentUser={currentUser} {...props}/>}/>
                <Route exact path="/signin" render={props=>{
                    return(
                        <AuthForm removeError={removeError} errors={errors} onAuth={authUser} buttonText="Login" heading="Welcome Back." {...props}/>
                    )
                }}/>
                <Route exact path="/signup" render={props=>{
                    return(
                        <AuthForm removeError={removeError} errors={errors} onAuth={authUser} buttonText="Signup" signUp="true" heading="Start Tweeting Today." {...props}/>
                    )
                }}/>
                <Route exact path="/users/:id/tweets/new" component={withAuth(TweetForm)}/>
            </Switch>
        </div>
    )
};

function MapStateToProps(state) {
    return {
        currentUser: state.currentUser,
        errors: state.errors
    }
}


export default withRouter(connect(MapStateToProps, {authUser, removeError})(Main));