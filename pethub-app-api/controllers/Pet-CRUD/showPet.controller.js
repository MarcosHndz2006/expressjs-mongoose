const { debug } = require('console');
const Pet = require('../../models/pet.model');
const controller = {};

controller.showPet = async (req, res) =>{
    try {
        const {identifier} = req.body;
        const pet = await Pet.findById(identifier);

        if(!pet){
            return res.status(404).json({error: "No se encontró la mascota"});
        }

        return res.status(200).json({pet});
    } catch (error) {
        debug({error});
        return res.status(500).json({error: "Fallo interno del servidor"});
    }
}

module.exports = controller;