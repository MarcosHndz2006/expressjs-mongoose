var express = require("express");
var router = express.Router();

const controller = require("../../controllers/pet.controller");
const petValidators = require("../../validators/pet.validators");
const runValidations = require("../../validators/index.middleware");
const deletePetRouter = require("./deleteRouters/deletePet.router");
const showPetRouter = require("./showRouters/showPet.router");

router.get("/", controller.findAll);

router.post("/", 
    petValidators.createPetValidator,
    runValidations,
    controller.create);
    
router.use("/searchPet", showPetRouter);

router.use("/deletePet", deletePetRouter);

module.exports = router;