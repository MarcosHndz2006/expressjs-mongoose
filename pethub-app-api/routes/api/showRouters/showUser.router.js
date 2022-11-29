const express = require("express");
const router = express.Router();

const controller = require('../../../controllers/User-CRUD/showUser.controller');
const showUserValidators = require('../../../validators/User-CRUD/showUser.validators');
const runValidations = require('../../../validators/index.middleware');

router.post("/",
    showUserValidators.findById,
    runValidations,
    controller.showUser
    );

module.exports = router;