const express = require("express")
const userRouter = require("../routes/users")
const catsRouter = require("../routes/cats")
const characterRouter = require("../routes/characters")
const connectMongo = require("../database/config")
var cors = require('cors')
class Server {

    constructor() {
        this.app = express()
        this.port = process.env.PORT

        this.usersPath = "/api/users"
        this.catsPath = "/api/cats"
        this.charactersPath = "/api/characters"

        this.middlewares()
        this.routes()
        this.conectarMongo()
    }

    async conectarMongo() {
        await connectMongo()
    }

    middlewares() {
        this.app.use(express.json())
        this.app.use(cors())
    }

    routes() {
        // /api/users
        this.app.use(this.usersPath, userRouter)

        // /api/cats
        this.app.use(this.catsPath, catsRouter)
        this.app.use(this.charactersPath, characterRouter)
    }

    listen() {
        this.app.listen(this.port, "0.0.0.0", () => {
            console.log("Servidor ejecutandose en", this.port)
        })
    }
}

module.exports = Server;