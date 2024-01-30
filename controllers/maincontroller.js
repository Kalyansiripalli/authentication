const { employees} = require("../models/employees");
const bcrypt=require('bcrypt');
const { get_userBy_email } = require("./getUserbyEmail");

exports.maincontroller={

    async register (req,res){
        
    
        const employee_details=await get_userBy_email.user_by_email(req.body.email);
    
        if(employee_details)
            return res.send("user already exist cant regigister with the same credentials again");

        const hashedpassword=bcrypt.hashSync(req.body.password,10);
        let new_employee =await employees.create({
            firstname:req.body.firstname,
            lastname:req.body.lastname,
            email:req.body.email,
            password:hashedpassword,
            contact:req.body.contact,
    
        }) 
    
        res.send("registration successful",new_employee);
    },

    
    async login (req,res){

        const employee_details=await get_userBy_email.user_by_email(req.body.email);
    
        if(!employee_details){
            res.send("Please register before login")
        }
        else if(bcrypt.compareSync(req.body.password,employee_details.password))
            res.send("login successful");
        else
        res.send("invalid login password");
    },
}


