const express = require("express");
const app = express();

app.get("/",(req,res)=>{
    res.send("hellow");
})
app.get("/api",(req,res)=>{
    res.send("hellow from api");
})

app.listen(3000);