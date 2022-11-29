var express = require("express");
var router = express.Router();

//importar los enrutadores, en este caso solo se tiene el post 
const userRouter = require('./user.router');
const petRouter = require('./pet.router');

//Definir las rutas
router.use("/user", userRouter);
router.use("/pet", petRouter);

module.exports = router;