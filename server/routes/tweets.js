const express= require("express");
const router= express.Router({mergeParams: true});
const {createTweet, getTweet, deleteTweet}= require("../controllers/tweets");

router
    .route("/")
    .post(createTweet);

router
    .route("/:tweet_id")
    .get(getTweet)
    .delete(deleteTweet);


module.exports= router;