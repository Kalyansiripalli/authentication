const{DataTypes}=require("sequelize");
const {connection}=require("./config");

const teams=connection.define('teams',{
    id:{
        primaryKey:true,
        autoIncrement:true,
        type:DataTypes.INTEGER
    },
    name:DataTypes.STRING,
    department:DataTypes.STRING,
});

exports.teams=teams;
