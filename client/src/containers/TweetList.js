import React, {Component} from "react";
import {connect} from "react-redux";
import {fetchTweets, deleteTweet} from "../store/actions/tweets";
import TweetItem from "../components/TweetItem";

class TweetList extends Component {
    componentDidMount() {
        this.props.fetchTweets();
    }

    render() {
        const {tweets, deleteTweet} = this.props;
        let tweetList = tweets.map(t => (
            <TweetItem
                key={t._id}
                date={t.createdAt}
                text={t.text}
                username={t.user.username}
                profileImgURL={t.user.profileImgURL}
                removeTweet={deleteTweet.bind(this, t.user._id ,t._id)}
            />
        ));

        return (
            <div className="row col-sm-8">
                <div className="row offset-1 col-sm-10">
                    <ul className="list-group" id="tweets">
                        {tweetList}
                    </ul>
                </div>
            </div>
        )
    }
}

function MatchStateToProps(state) {
    return {
        tweets: state.tweets
    }
}

export default connect(MatchStateToProps, {fetchTweets, deleteTweet})(TweetList)

