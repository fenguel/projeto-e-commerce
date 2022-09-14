const mongoose = require("mongoose");

const MONGODB_URI = process.env.MONGODB_URI;

const connect = async () => {
    try {
        mongoose.connect(MONGODB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("Banco conectado");
    } catch (e) {
        console.log("Error: ", e.message);
    }
};
module.exports = {
    connect,
};
