const { debug } = require('console');
const Pet = require('../../models/pet.model');

const controller = {};

controller.delete = async (req, res) => {
    try {
        const {identifier} = req.body;
        console.log(identifier)
        const pet = await Pet.findById(identifier);

        if(!pet){
            return res.status(404).json({error: "La mascota no se encuentra"});
        }
        await Pet.deleteOne({_id:identifier});
        return res.status(200).json({pet})

    } catch (error) {
        debug({error});
        res.status(500).json({error: "Error del servidor, hemos presentado algunas fallas"});
    }
}

module.exports = controller;