const express= require("express"),
    app= express(),
    cors= require("cors"),
    bodyParser= require("body-parser");

const errorHandler= require("./controllers/error");

const PORT= 8081;

app.use(cors());
app.use(bodyParser.json());

// all routes

app.use(function (req,res,next) {
    let err=new Error("Not Found");
    err.status= 404;
    next(err);
});

// error handler
app.use(errorHandler);

app.listen(PORT, function () {
    console.log(`Server starting on PORT ${PORT}`);
});
