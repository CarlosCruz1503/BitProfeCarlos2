const { models } = require("mongoose")
const User = require("../models/users.js")

const validateAge = (age = 0) => {
    if (age < 18) {
        throw new Error("Must have more than 18 years")
    }
    return true
}

const validateEmail = async (emailIngresado) => {
    const emailExist = await User.find({ email: emailIngresado })
    if (emailExist.length > 0) {
        throw new Error("El email ya existe")
    }

    return true
}

module.exports = {
    validateAge,
    validateEmail
}