// Create a middleware function that logs each incoming request’s HTTP method, URL, and timestamp to the console

const express = require("express");

const app = express();

function logMiddleware(req, res, next){
    console.log("Method is " + req.method);
    console.log("URL is " + req.url);
    console.log(new Date());
    next();
}

app.use(logMiddleware);

app.get("/sum", function(req, res){

    const a = parseInt(req.query.a);
    const b = parseInt(req.query.b);

    res.json({
        ans: a + b
    });

})

app.get("/multiply", function(req, res){
   requestIncreaser(req, res);

    const a = req.query.a;
    const b = req.query.b;

    res.json({
        ans: a * b
    })
    
});

app.get("/divide", function(req, res){
    requestIncreaser(req, res);

    const a = req.query.a;
    const b = req.query.b;

    res.json({
        ans: a/b
    })

});

app.get("/subtract", function(req, res){
    requestIncreaser(req, res);

    const a = req.query.a;
    const b = req.query.b;

    res.json({
        ans: a - b
    })

});

const port = 3435;
app.listen(port, ()=>{
  console.log(`server running on port ${port}`);
 })
