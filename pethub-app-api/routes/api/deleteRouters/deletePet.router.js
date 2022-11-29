const express = require("express");
const router = express.Router();

const controller = require("../../../controllers/Pet-CRUD/deletePet.controller");
const validators = require("../../../validators/Pet-CRUD/deletePet.validators");
const runValidators = require("../../../validators/index.middleware");

router.post("/",
    validators.deletePetValidators,
    runValidators,
    controller.delete
    );

module.exports = router;