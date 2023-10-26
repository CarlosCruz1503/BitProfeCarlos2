const { Schema, model } = require("mongoose")

const CharactersSchema = Schema(
    {
        id: {
            type: Number
        },
        name: {
            type: String,
            required: [true, "El nombre es obligatorio"],
        },
        status: {
            type: String,
            default: "live",
        },
        species: {
            type: String,
        },
        type: {
            type: String,
        },
        gender: {
            type: String,
        },
        origin: {
            type: Object
        },
        location: {
            type: Object,
        },
        image: {
            type: String,
        },
        episode: {
            type: Array
        },
        url: {
            type: String,
        }
    }
)

module.exports = model("Character", CharactersSchema)

