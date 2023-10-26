const { Schema, model } = require("mongoose")

const UserSchema = Schema(
    {
        email: {
            type: String,
            required: [true, "El nombre es obligatorio"],
            unique: true
        },
        name: {
            type: String,
            required: [true, "El nombre es obligatorio"]
        },
        age: {
            type: Number,
            required: [true, "El nombre es obligatorio"]
        },
        hasPets: {
            type: Boolean
        },
        phoneNumber: {
            type: String,
            required: [true, "El nombre es obligatorio"]
        },
        password: {
            type: String,
            required: [true, "El nombre es obligatorio"]
        }
    }
)

module.exports = model("User", UserSchema)

