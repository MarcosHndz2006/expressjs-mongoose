const { debug } = require('console');
const User = require('../../models/user.model');

const controller = {};

controller.deleteUser = async (req, res) => {
    try {
        const {identifier} = req.body;
        const user = await User.findById(identifier);

        if(!user){
            return res.status(404).json({error: "El usuario no se encuentra"});
        }
        await User.deleteOne({_id:identifier});
        return res.status(200).json({user})

    } catch (error) {
        debug({error});
        res.status(500).json({error: "Error del servidor, hemos presentado algunas fallas"});
    }
}

module.exports = controller;