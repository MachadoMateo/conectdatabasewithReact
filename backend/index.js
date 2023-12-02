const express  = require('express');
const mysql = require('mysql2');
const cors = require('cors'); //en el frontend importo librerias y en el backen se hacen copias se trabaja con copias 

const app = express();
app.use(cors());


const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'bibliotecadb'
});


//conectar la database
db.connect((error)=>{
    if(error){
        console.log("error en la conexion a la base de datos" ,error);
    }else{
        console.log("conexion exitosa");
    }
});

//levantae el server

app.listen(5000, () =>{
    console.log("work ok ");

});