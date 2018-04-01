const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const UserSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    profileImgURL:{
        type: String
    }
});

UserSchema.pre("save", async function (next) {
    try{
        if(!this.isModified("password")){
            return next();
        }
        let hashedPassword= await bcrypt.hash(this.password, 10);
        this.password= hashedPassword;
        return next();
    }
    catch(err){
        return next(err);
    }
});

UserSchema.methods.comparePassword= async function(candidatePassword, next) {
    try{
        let isMatch= await bcrypt.compare(candidatePassword, this.password);
        return isMatch;
    }
    catch(err){
        next(err);
    }
};

const User= mongoose.model("User", UserSchema);

module.exports= User;