const Character = require("../models/characters")

const createCharacter = async (request, response) => {
    let character = request.body

    let newCharacter = await Character.create(character)

    response.json(newCharacter)
}

const getCharacters = async (request, response) => {
    let params = request.query
    console.log(params)

    let characters = await Character.find(params)

    response.json(characters)

}

const getCharactersById = async (request, response) => {
    try {
        let _id = request.params._id
        console.log(_id)

        let characters = await Character.find({ _id: _id })

        response.json(characters)
    } catch (e) {
        response.json({ "error": e })
    }
}

const getCharactersLiveLimitSort = async (request, response) => {
    // let characters = await Character.find({ status: "Alive" }).sort({ name: 1 }).limit(5)

    let characters = await Character.aggregate([
        {
            $match: { status: "Alive" }
        },
        {
            $skip: 40,
        },
        {
            $limit: 20
        }

    ])

    response.json(characters)

}

const getCharactersWithPagination = async (request, response) => {

    try {
        let page = parseInt(request.query.page)
        let page_size = parseInt(request.query.page_size)
        let status = request.query.status

        console.log("Page :", page)
        console.log("Page_size:", page_size)


        const limit = page_size
        const skipCharacters = (limit * page) - limit

        console.log("Skip :", skipCharacters)

        let characters = await Character.aggregate([
            { $match: { status: status } },
            {
                $skip: skipCharacters
                // limit * page = 10 * 1= 10 - 10 = 0
                // limit * page = 10 * 2= 20 - 10 = 10
                // limit * page = 10 * 3= 30 - 10 = 20
            },
            {
                $limit: limit
            },
        ])

        response.json(characters)
    } catch (e) {
        response.json({ "error": e })
    }
}

module.exports = {
    createCharacter,
    getCharacters,
    getCharactersById,
    getCharactersLiveLimitSort,
    getCharactersWithPagination
}