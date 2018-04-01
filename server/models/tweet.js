const mongoose= require("mongoose");
const User= require("./user");

const TweetSchema= mongoose.Schema({
    text:{
        type: String,
        required: true,
        maxLength: 160
    },
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"User"
    }
});

TweetSchema.pre("remove", async function (next) {
    try{
        // find user
        let user= await User.findById(this.user.id);
        // remove from user tweets array
        user.tweets.remove(this.id);
        // wait for user save
        await user.save();
        return next();
    }
    catch(err){
        return next(err);
    }
});

const Tweet= mongoose.model("Tweet", TweetSchema);

module.exports= Tweet;