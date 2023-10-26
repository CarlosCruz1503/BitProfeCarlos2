const { Router } = require("express")
const { catsGet, catsPost, catsDelete } = require("../controllers/cats")

const catsRouter = Router()

// /api/cats
catsRouter.get("/", catsGet)

// /api/cats
catsRouter.post("/", catsPost)

// /api/cats
catsRouter.delete("/", catsDelete)

module.exports = catsRouter