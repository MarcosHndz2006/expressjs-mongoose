const User = require('../models/user.model');
const debug = require("debug")("app:user-controller");

const controller = {};

controller.create  = async (req, res) => {
    try {
        const {id,username,email,name,age,password,numberPets,publications} = req.body;
    
        const newUser = new User({
            username:username,
            email:email,
            name:name,
            age:age,
            password:password,
            numberPets:numberPets,
            publications:publications
        });
    
        const user = await newUser.save();
    
        if(!user){
           return res.status(409).json({ error: "No se pudo crear el usuario" });
        }
        return res.status(201).json({user});   

    } catch (error) {
        debug({error});
        return res.status(500).json({ error: "El servidor falló "});
    }
}

controller.findAll = async (req, res) => {
    try {
        const users = await User.find();
        return res.status(201).json({users});
   } catch (error) {
        debug({error});
        return res.status(500).json({ error: "El servidor ha fallado "});
   } 
}

controller.findOneById = async (req,res) => {
    try {
        const {identifier} = req.params;

        const user = await User.findById(identifier);

        if(!user){
            return res.status(404).json({error:"usuario no encontrado"});
        }
        return res.status(200).json({user});
    
    } catch (error) {
        debug({error});
        return res.status(500).json({erorr: "El servidor ha fallado"});
    }
}
module.exports = controller;