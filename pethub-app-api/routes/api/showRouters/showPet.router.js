const express = require("express");
const router = express.Router();

const controller = require('../../../controllers/Pet-CRUD/showPet.controller');
const showPetValidators = require('../../../validators/Pet-CRUD/showPet.validators');
const runValidations = require('../../../validators/index.middleware');

router.post("/",
    showPetValidators.findById,
    runValidations,
    controller.showPet
    );

module.exports = router;