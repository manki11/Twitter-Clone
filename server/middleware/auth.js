require("dotenv").load();
const jwt= require("jsonwebtoken");

// make sure user is logged in
module.exports= function (req,res,next) {
    try{
        const token = req.headers.authorization.split(" ")[1];
        jwt.verify(token, process.env.SECRET_KEY, function (err, decoded) {
            if(decoded){
                return next();
            }else{
                return next({
                    status:401,
                    message:"Login First"
                })
            }
        })
    }
    catch(e){
        return next({
            status:401,
            message:"Login First"
        })
    }
};



// make sure we get the right user
