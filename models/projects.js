const{DataTypes}=require("sequelize");
const {connection}=require("./config");

const projects=connection.define('projects',{
    id:{
        primaryKey:true,
        autoIncrement:true,
        type:DataTypes.INTEGER
    },
    name:DataTypes.STRING
});

exports.projects=projects;

