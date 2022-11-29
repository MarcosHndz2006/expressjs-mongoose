const express = require("express");
const router = express.Router();

const controller = require("../../../controllers/User-CRUD/deleteUser.controller");
const validators = require("../../../validators/User-CRUD/deleteUser.validators");
const runValidators = require("../../../validators/index.middleware");

router.post("/",
    validators.deleteUserValidators,
    runValidators,
    controller.deleteUser
    );

module.exports = router;