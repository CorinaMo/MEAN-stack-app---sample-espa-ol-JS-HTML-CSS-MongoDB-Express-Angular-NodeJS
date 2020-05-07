
const MongoClient = require('mongodb').MongoClient; 

let db = null;

// CONECTA CON BD Y SERVER
module.exports.connect = function (url, callback) {  
    // Si ya está conectado, no se vuelve a conectar  
    if (db) {          
        return callback();  
    } 

 const client = new MongoClient(url, { useNewUrlParser: true, useUnifiedTopology: true }); 

 client.connect(function (err, result) {  
     if (err) {  
         return callback(err);  
    }    
    console.log("Conectado a BD");  
    db = result;  
    callback(err);  
    }); 
}; 

// FUNCIÓN CIERRE DE CONEXIÓN
module.exports.close = function (callback) {  
    if (db) {  
        db.close(function (err) {  
            console.log("Desconectado de BD"); 
        db = null;  
        callback(err); 
     }); 
    } 
}; 

module.exports.get = function () {  
    return db; 
} 
