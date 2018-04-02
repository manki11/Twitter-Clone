const db = require("../models");
const jwt = require("jsonwebtoken");

exports.createTweet = async function (req, res, next) {
    try {
        let tweet = await db.Tweet.create({
            text: req.body.text,
            user: req.params.id
        });
        let foundUser = await db.User.findById(req.params.id);
        foundUser.tweets.push(tweet.id);
        await foundUser.save();
        let newTweet = await db.Tweet.findById(tweet.id).populate("user", {
            username: true,
            profileImgURL: true,
            id: true
        })

        return res.status(200).json(newTweet);
    }
    catch (err) {
        return next(err);
    }
};

exports.getTweet = async function (req, res, next) {
    try {
        let tweet = await db.Tweet.findById(req.params.tweet_id);
        return res.status(200).json(tweet);
    }
    catch (err) {
        return next(err);
    }
};

exports.deleteTweet = async function (req, res, next) {
    try {
        let foundTweet = await db.Tweet.findById(req.params.tweet_id);
        await foundTweet.remove();
        return res.status(200).json(foundTweet);
    }
    catch (err) {
        return next(err);
    }
};

exports.getAllTweets = async function (req, res, next) {
    try {
        let tweets = await db.Tweet
            .find()
            .sort({createdAt: 'desc'})
            .populate("user", {
                username: true,
                profileImgURL: true
            });
        res.status(200).json(tweets)
    }
    catch (err) {
        next(err);
    }
};