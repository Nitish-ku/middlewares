const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.json());

app.post("/sum", function(req,res){
    console.log(req.body);
    const a = parseInt(req.body.a);
    const b = parseInt(req.body.b);

    res.json({
        ans: a + b,
    });
});

const port = 3435;

app.listen(port, ()=>{
    console.log(`server is running on port ${port}`);
})
