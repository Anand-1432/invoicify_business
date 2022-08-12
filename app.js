const express = require("express");
const path = require('path');
const app = express();

const staticpath = path.join(__dirname, "./build");

console.log(staticpath);

app.use(express.static(staticpath));

app.get("/",(req,res)=>{
    res.send("hellow");
})
app.get("/api",(req,res)=>{
    res.send("hellow from api");
})

app.listen(3000);