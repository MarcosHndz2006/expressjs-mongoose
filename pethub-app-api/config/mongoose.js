const Mongoose = require("mongoose");
const debug = require("debug")("app:mongoose");

var dbhost = process.env.DBHOST || "localhost";
var dbport = process.env.DBPORT || "27017";
var dbname = process.env.DBNAME || "PethubApp";

const dburi = process.env.DBURI || `mongodb://${dbhost}:${dbport}/${dbname}`;


const connectDB = async () => {
    try {
        await Mongoose.connect(dburi);
        debug("Conexión a la base exitosa");        
    } catch (error) {
        debug("Error en la conexión de la base");
        process.exit(1);
    }
}

module.exports = {
    connectDB
}