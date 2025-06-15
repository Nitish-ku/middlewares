// getting the directory name 

import express from "express";
import {dirname} from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3435;

app.get("/", (req, res)=>{
    res.sendFile(__dirname + "/index.html");
});

app.listen(port, ()=>{
    console.log(`server running on port ${port}`);
})
