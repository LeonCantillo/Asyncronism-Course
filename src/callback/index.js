// EJEMPLO 1
function suma(valor1, valor2) {
    return valor1 + valor2
}

function calc(valor1, valor2, callback) {
    return callback(valor1, valor2)
}

console.log(calc(2,2, suma))

// EJEMPLO 2
// function saludo() {
//     console.log('Chanchito feliz')
// }
// setTimeout(saludo, 5000)

// O lo que es lo:
setTimeout(function() {
    console.log('Chanchito feliz')
}, 5000)

// EJEMPLO 3
function grettin(name) {
    console.log(`Hola ${name}`)
}
setTimeout(grettin, 5000, 'León')
