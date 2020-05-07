const db = require('../db'); 
var ObjectId = require('mongodb').ObjectId; 
const { validationResult } = require('express-validator');

// LISTA USUARIOS GENERAL Y POR _ID 
module.exports.users_list = function (req, res, next) {  
    
    if (db.get() === null) {         
        next(new Error('La conexión no está establecida'));         
        return;     
    }     
    db.get().db('apidb').collection('users').find().toArray(function (err, result) {         
        if (err) {             
            next ( new Error('Fallo en la conexión con la BD') );             
            return;         
        } else {                   
            res.send(result);             
            console.log(result);       
        }     
    }); 
}; 

module.exports.users_getById = function (req, res, next) {
    if (db.get() === null) {
        next(new Error('La conexión no está establecida'));
        return;
    }
    const user = {};     
        user._id = req.body._id;
        user.nombre = req.body.nombre;     
        user.apellidos = req.body.apellidos;     
        user.edad = req.body.edad;
        user.dni = req.body.dni;
        user.cumple = new Date(req.body.cumple);
        user.color = req.body.color;
        user.sexo = req.body.sexo;
        user.notas = req.body.notas;
          
    db.get().db('apidb').collection('users').find({ _id: ObjectId(req.params._id) }).toArray(function (err, result) {
        if (err) {
            next(new Error('Fallo en el listado de estudiantes'));
            return;
        } else {         
            res.send(result);
        }
    });
};

//CREA USUARIO
module.exports.users_create = function (req, res, next) {   
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(422).json({ errors: errors.array() });
    }
    if (db.get() === null) {         
        next(new Error('La conexión no está establecida'));        
         return;     
        }     
        const user = {};     
        user.nombre = req.body.nombre;     
        user.apellidos = req.body.apellidos;     
        user.edad = req.body.edad;
        user.dni = req.body.dni;
        user.cumple = new Date(req.body.cumple).toISOString().replace('T', ' ').substr(0, 10);
        user.color = req.body.color;
        user.sexo = req.body.sexo;
        user.notas = req.body.notas;

        // Insertar un documento     
        db.get().db('apidb').collection('users').insertOne(user, function (err, result) {    
                if (err) {             
                next ( new Error('Fallo en la conexión con la BD') );             
                return;         
            } else {                            
                res.send(result);         
                console.log(result);
            }     
        }); 
    };

// ACTUALIZA USUARIO
module.exports.users_update_one = function (req, res, next) {  
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(422).json({ errors: errors.array() });
    }   
    if (db.get() === null) {  
        next(new Error('La conexión no está establecida'));  
        return;  
    } 
    const filter = { _id: ObjectId(req.params._id) };
    const update = {   
        $set: {
        nombre: req.body.nombre, 
        apellidos : req.body.apellidos,     
        edad : req.body.edad,
        dni : req.body.dni,
        cumple : new Date(req.body.cumple).toISOString().replace('T', ' ').substr(0, 10),
        color : req.body.color,
        sexo : req.body.sexo,
        notas : req.body.notas       
        }
    }; 

     // Insertar un documento  
    db.get().db('apidb').collection('users').updateOne(filter, update, function (err, result) {  
     if (err) {  
         next ( new Error('Fallo en la conexión con la BD') );  
     return;  
    } else {  
        res.send(result);  
    }  
    });
 };

 // BORRA USUARIO 
 module.exports.users_delete_one = function (req, res, next) {  
     if (db.get() === null) {  
         next(new Error('La conexión no está establecida'));  
         return;  
        }  
        const filter = { _id: ObjectId(req.params._id) };
        db.get().db('apidb').collection('users').deleteOne(filter, function (err, result) {  
            if (err) {
                next ( new Error('Fallo en la conexión con la BD') );  
                return;  
            } else {  
                res.send(result);  
            }  
        }); 
    };