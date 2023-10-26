const { createCharacter, getCharacters, getCharactersById, getCharactersLiveLimitSort, getCharactersWithPagination } = require("../controllers/characters")
const { Router } = require("express")

const characterRouter = Router()

characterRouter.post("/", createCharacter)
characterRouter.get("/", getCharacters)
// characterRouter.get("/:_id", getCharactersById)
characterRouter.get("/liveLimitSort", getCharactersLiveLimitSort)
characterRouter.get("/pagination", getCharactersWithPagination)
module.exports = characterRouter