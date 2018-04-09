import React, {Component} from "react";
import {connect} from "react-redux";
import {postNewTweet} from "../store/actions/tweets";
import errors from "../store/reducers/errors";

class TweetForm extends Component{
    constructor(props){
        super(props);
        this.state={
            tweet: ""
        }
    }

    handleNewEvent= event=> {
        event.preventDefault();
        this.props.postNewTweet(this.state.tweet)
            .then(()=> this.props.history.push("/"))
    };

    render(){
        return(
            <form onSubmit={this.handleNewEvent}>
                {this.props.errors.message && (
                    <div className="alert alert-danger">
                        {this.props.errors.message}
                    </div>
                )}
                <input
                    className="form-control"
                    type="text"
                    value={this.state.tweet}
                    onChange={e=> this.setState({tweet: e.target.value})}
                />

                <button type="submit" className="btn btn-success pull-right">
                    Tweet
                </button>
            </form>
        )
    }
}


function MapStateToProps(state) {
    return {
        errors: state.errors
    }
}

export default connect(MapStateToProps, {postNewTweet})(TweetForm);