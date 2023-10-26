const mongoose = require("mongoose")

const connectMongo = async() => {
    try {
        await mongoose.connect(process.env.MONGO_HOST)
        console.log("Conexión establecida con la base de datos")
        // Este código se ejecutará si no hay ningún error
    } catch (error) {
        // Este código se ejecutara si la función connect
        // tiene algún error
        console.log(error)
    }
}

module.exports = connectMongo