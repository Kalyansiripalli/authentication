const express=require("express");
const app=express();
app.use(express.json());

const{init}=require("./models/config");
init();

const { registerValidators } = require("./validators/registerValidator");
const { maincontroller } = require("./controllers/maincontroller");
const { loginValidators } = require("./validators/loginvalidator");


app.post("/register",registerValidators,maincontroller.register);

app.post("/login",loginValidators,maincontroller.login);

app.listen(3001,()=>{
    console.log("server running on port number 3001");
})