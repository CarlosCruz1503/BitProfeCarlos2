
const myDiv = document.getElementById("PersonajeUno")

async function traerAsyncRick(page, status) {
    let data = {}
    console.log(page)
    console.log(status)
    try {
        const response = await fetch(`http://localhost:8080/api/characters/pagination?page=${page}&page_size=10&status=${status}`)
        data = await response.json().then((response) => {

            for (let i = 0; i < response.length; i++) {
                const articulo = document.createElement('article')
                articulo.className += "articulo"

                const TituloFicha = document.createElement('h2')
                TituloFicha.innerHTML = `${response[i].name}`

                const imagenficha = document.createElement('img')
                imagenficha.src = `${response[i].image}`

                const textoficha = document.createElement('p')
                textoficha.className += "info"
                textoficha.innerHTML = `Especie: ${response[i].species} <br> Estado: ${response[i].status} <br> Tipo: ${response[i].type} <br> Genero: ${response[i].gender} <br>`

                const padre = document.querySelector('#personajes')

                padre.appendChild(articulo)
                articulo.appendChild(TituloFicha)
                articulo.appendChild(imagenficha)
                articulo.appendChild(textoficha)
            }

        })
    } catch (error) {
        console.log(error)
    }
    return data
}





