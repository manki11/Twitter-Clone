const express= require("express");
const router= express.Router({mergeParams: true});
const {createTweet}= require("../controllers/tweets");

router.route("/")
    .post(createTweet);


module.exports= router;