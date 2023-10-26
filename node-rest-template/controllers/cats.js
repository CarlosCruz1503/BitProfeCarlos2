
const catsGet = (req, res) => {
    console.log("Llego al controlador")
    res.status(200).send({"msg": "GET en cats"})
}

const catsPost = (req, res) => {
    res.status(200).send("Se ejecutó un POST en cats")
}

const catsDelete = (req, res) => {
    res.status(200).send("Se ejecutó un DELETE en cats")
}

module.exports = {
    catsGet,
    catsPost,
    catsDelete
}