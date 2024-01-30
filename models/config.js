// import the sequelize instance
const { Sequelize } = require('sequelize');


// establish the connection between sequelize and mysqldatabase

const connection = new Sequelize('auth', 'root', 'Charan@8055', {
    host: 'localhost',
    dialect: 'mysql'
});

function init(){
    connection.sync({
                alter: true
            }).then(res=>{
        console.log("database connected successfully");
    }).catch(err=>console.log(err))
}

// async function connect()
// {
//     try{
//         await connection.authenticate();
//         console.log("connection established successfully");
//     }catch(error){
//         console.log("unable to connect to the database",error);
//     }
// }

// function close()
// {
//     connection.close();
// }


// why module.exports is not working here

// exports.connect = connect;
// exports.close=close;
exports.init = init;
exports.connection=connection;

const{employees}=require("./employees");
const{projects}=require("./projects");
const{teams}=require("./teams");

teams.hasMany(projects,{
    foreignKey: {
        allowNull: true
    }
})
teams.hasMany(employees, {
    foreignKey: {
        name: "team_id",
        allowNull: true
    }
})




