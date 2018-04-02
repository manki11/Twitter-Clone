const db = require("../models");
const jwt = require("jsonwebtoken");

exports.createTweet= async function (req,res,next) {
    try{
        let tweet= await db.Tweet.create({
            text: req.body.text,
            user: req.params.id
        });
        let foundUser=await db.User.findById(req.params.id);
        foundUser.tweets.push(tweet.id);
        await foundUser.save();
        let newTweet= await db.Tweet.findById(tweet.id).populate("user",{
            username:true,
            profileImgURL: true,
            id: true
        })

        return res.status(200).json(newTweet);
    }
    catch(err){
        return next(err);
    }
};

exports.getTweet= async function (req,res,next) {

};

exports.deleteTweet= async function (req,res,next) {

};