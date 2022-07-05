const express= require('express');
const router= express.Router();
const Empleado = require('../models/Empleado');

//Listar todos los elementos
router.get('/empleados',(req,res) => {
    Empleado.find({},(err, empleados) =>{
    return res.json(empleados);
    }); 
 });

//Crear un registro - Dar de alta un empleado
router.post('/empleados',(req,res) =>{
    Empleado.create(req.body,(err,empleado)=>{
        if(err){
            res.json(err);
        }
        else{ 
            return res.json(empleado);
        }
    });
});

module.exports= router;