const empleadosCtrl={};

const Empleado= require('../models/Empleado');

empleadosCtrl.getEmpleados= async (req,res)=>{
    const empleado= await Empleado.find();
    res.json(empleado);
}

empleadosCtrl.createEmpleado= async (req,res)=>{
   const empleado= new Empleado(req.body);
   console.log(empleado);
   await empleado.save();
   res.send({message:'Empleado Creado'});
}
//Encontrar empleado
empleadosCtrl.getEmpleado=  async (req,res)=>{
    const empleado= await Empleado.findById(req.params.id);

    res.send(empleado);
}
//Actualizar empleado
empleadosCtrl.editEmpleado= async  (req,res)=>{
    const empleado= await Empleado.findByIdAndUpdate(req.params.id,req.body);
    res.json({message: 'Empleado actualizado'});
}
//Eliminar Empleado
empleadosCtrl.deleteEmpleado= async (req,res)=>{
    const empleado= await Empleado.findByIdAndDelete(req.params.id);
    res.json({message:'Empleado eliminado'});
}


module.exports= empleadosCtrl

