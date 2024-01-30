const{DataTypes}=require("sequelize");

const {connection}=require("./config");

const employees=connection.define('employees',{
    id:{
        primaryKey:true,
        autoIncrement:true,
        type:DataTypes.INTEGER
    },
    
    firstname:DataTypes.STRING,
    lastname:DataTypes.STRING,
    email:DataTypes.STRING,
    password:DataTypes.STRING,
    contact:{
        type:DataTypes.STRING,
        allowNull:true
    }
})

exports.employees=employees;


