const Pet = require('../models/pet.model');
const debug = require("debug")("app:pet-controller");

const controller = {};

controller.create = async (req, res) => {
    try {
        const {id, name, type, breed, publications} = req.body;    
        const newPet = new Pet({
            id:id,
            name:name,
            type:type,
            breed:breed,
            publications:publications
        });
    
        const pet = await newPet.save();
    
        if(!pet){
            return res.status(409).json({error: "no se pudo crear la mascota"});
        }
        return res.status(200).json({pet});        
    } catch (error) {
        debug({error});
        return res.status(500).json({error: "Fallo del servidor"});
    }
}

controller.findAll = async (req, res) => {
    try {
        const pets = await Pet.find();
        return res.status(200).json({pets});    
    } catch (error) {
        debug({error});
        return res.status(500).json({error:"Fallo del servidor"});
    }
}

// controller.findOneById = async (req, res) => {
//     try {
//         const { identifier } = req.params;
//         const pet = await Pet.find({_id:identifier});
//         if(!pet){
//             return res.status(500).json({error: "No se encontró la mascota, fallo del servidor"});
//         }
//         return res.status(200).json({pet});
        
//     } catch (error) {
//         debug({error});
//         return res.status(500).json({error:"Fallo del servidor"});
//     }
// }

module.exports = controller;