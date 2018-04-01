const db = require("../models");
const jwt = require("jsonwebtoken");

exports.signIn = async function(req, res, next) {
    // finding a user
    try {
        let user = await db.User.findOne({
            email: req.body.email
        });
        let { id, username, profileImageUrl } = user;
        let isMatch = await user.comparePassword(req.body.password);
        if (isMatch) {
            let token = jwt.sign(
                {
                    id,
                    username,
                    profileImageUrl
                },
                process.env.SECRET_KEY
            );
            return res.status(200).json({
                id,
                username,
                profileImageUrl,
                token
            });
        } else {
            return next({
                status: 400,
                message: "Invalid Email/Password."
            });
        }
    } catch (e) {
        return next({ status: 400, message: "Invalid Email/Password." });
    }
};

exports.signUp = async function (req, res, next) {
    try {
        let user = await db.User.create(req.body);
        let {id, username, profileImgURL} = user;
        let token = jwt.sign({
            id,
            username,
            profileImgURL
        }, process.env.SECRET_KEY);

        return res.status(200).json({
            id,
            username,
            profileImgURL,
            token
        })
    }
    catch (err) {
        if (err.code === 11000) {
            err.message = "Sorry that username or email is already taken";
        }
        return next({
            status: 400,
            message: err.message
        })
    }
};