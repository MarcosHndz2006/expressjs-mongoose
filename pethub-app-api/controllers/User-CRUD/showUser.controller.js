const { debug } = require('console');
const User = require('../../models/user.model');
const controller = {};

controller.showUser = async (req, res) =>{
    try {
        const {identifier} = req.body;
        const user = await User.findById(identifier);

        if(!user){
            return res.status(404).json({error: "No se encontró el usuario"});
        }

        return res.status(200).json({user});
    } catch (error) {
        debug({error});
        return res.status(500).json({error: "Fallo interno del servidor"});
    }
}

module.exports = controller;