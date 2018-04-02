const express= require("express");
const router= express.Router({mergeParams: true});
const {isLoggedIn, isCorrectUser} = require("../middleware/auth");
const {getAllTweets}= require("../controllers/tweets");

const authRoutes= require("./auth"),
    tweetRoutes= require("./tweets");

router.use("/api/auth", authRoutes);

router.use(
    "/api/user/:id/tweets",
    isLoggedIn,
    isCorrectUser,
    tweetRoutes
);

router.use(
    "/api/tweets",
    isLoggedIn,
    getAllTweets
);

module.exports= router;

