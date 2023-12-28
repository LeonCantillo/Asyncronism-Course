import fetch from "node-fetch";
const API = 'https://jsonplaceholder.typicode.com/users'

// Inicia la llamada a la API
fetch(API)
.then(response => {
    // Verifica si la solicitud fue exitosa (status 200)
    if(!response.ok) throw new Error(`Error: ${response.status}`)
    return response.json()
})
.then(users => {
    users.forEach(user => {
        console.log(`Nombre: ${user.name}, Correo: ${user.email}`)
    })
})
.catch(e => {
    console.error(`Error por el usuario ${user.email}.\n`, e)
})