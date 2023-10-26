const { Router } = require("express")
const { usuariosGet, usuariosPost } = require("../controllers/users")
const { check } = require("express-validator")
const verifyFields = require("../middlewares/db-validator")
const { validateAge, validateEmail } = require("../helpers/validators")

const userRouter = Router()

userRouter.get("/", usuariosGet)

userRouter.post("/", [
    check("name", "Name is required").not().isEmpty(),
    check("age", "Age must be a valid value").custom(validateAge),
    check("email", "Must be a valid email").isEmail().custom(validateEmail),
    check("phoneNumber", "PhoneNumber is required").not().isEmpty(),
    check("password", "Minimum password lenght is 8 characters").isLength({ min: 8 }),
    verifyFields,
], usuariosPost)

module.exports = userRouter