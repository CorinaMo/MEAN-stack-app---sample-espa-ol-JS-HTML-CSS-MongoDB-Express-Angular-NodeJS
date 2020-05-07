var express = require('express'); 
var router = express.Router(); 
var users_controller = require('../controllers/usersController'); 
const { check } = require('express-validator');
 
// ARRAY DE VALIDACIONES EXPRESS  
 const valid_user = [  
      
    check('nombre').custom(value=>{
      if(isNaN(value)){
          return true;
      }else{
          throw new Error('Este campo ha de tener 3 o más letras');
      }
})     
    .isLength({ min: 3 }),   
    check('apellidos').custom(value=>{
      if(isNaN(value)){
          return true;
      }else{
          throw new Error('Este campo ha de tener 3 o más letras');
      }
})          
    .isLength({ min: 3 }),
    
    check('edad', 'Ha de ser un valor comprendido entre 0 y 125')
    .isNumeric()
    .isInt({min: 0, max: 125}),

    check('dni', 'Debe contener exactamente 9  caracteres')
    .isLength({min : 9, max: 9})  
    .isAlphanumeric(),

    check('cumple').custom(value=>{
      if((new Date (value))){   
          return true;
      }else{
          throw new Error( 'Fecha no válida. Formato necesario: yyyy-mm-dd');
      }
}).isISO8601(),

    check('color', 'Este campo ha de contener 1 sola palabra de 3 o más letras')
    .isLength({min: 3})
    .isAlpha('es-ES'),

    check('sexo', 'Ha de ser una de las siguientes opciones: Hombre, Mujer, Otro o No especificado.')    
    .isIn(['Hombre', 'Mujer', 'Otro', 'No especificado'])
] 

/* GET users listing. */ 
router.get('/', users_controller.users_list); 
router.get('/:_id', users_controller.users_getById);

/* POST create user. */ 
router.post('/', valid_user, users_controller.users_create )

/* PUT update user. */ 
router.put('/:_id', valid_user, users_controller.users_update_one); 

/* DELETE delete user. */ 
router.delete('/:_id', users_controller.users_delete_one); 

module.exports = router;
