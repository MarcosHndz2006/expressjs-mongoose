var express = require("express");
var router = express.Router();

const controller = require("../../controllers/user.controller");
const userValidators = require("../../validators/user.validators");
const runValidations = require("../../validators/index.middleware");
const deleteUserRouter = require("./deleteRouters/deleteUser.router");
const showUserRouter = require("./showRouters/showUser.router");

router.get("/", controller.findAll);

router.post("/", 
    userValidators.createUserValidator,
    runValidations,
    controller.create);
    
    router.use("/searchUser", showUserRouter);

    router.use("/deleteUser", deleteUserRouter);
    

module.exports = router;