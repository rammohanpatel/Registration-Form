const express = require("express");
const app = express();
const port = process.env.PORT || 3000 ;
require("./database/connection");
const path = require("path");

const Register = require("./module/register_schema")

static_path = path.join(__dirname,"./public")
//console.log(path.join(__dirname,"./public"))

app.use(express.static(static_path));

app.use(express.urlencoded({extended:false}));

app.post("/", async(req,res)=>{
    try{
      const registerStudent = new Register(({
        username:req.body.username,
        email:req.body.email,
        password:req.body.password,
        gender:req.body.gender
      }))
      const registered = await registerStudent.save();
      res.status(201).send("<h2>Registration Successful<h2>");
    }catch(err){
        res.send(err.message)
    }
})

app.get("/",(req,res)=>{
    res.send("Hello WOrld");
})

app.listen(port,console.log(`listening on ${port}`));