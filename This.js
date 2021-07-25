console.log(this === global) //el this fuera de una función apunta para el module.exports
console.log(this === module) //false, porque this es un objeto que es la referencia del .exports

console.log(this === module.exports)
console.log(this === exports)

function logThis(){
    console.log('Dentro de función')
    console.log(this === exports)  //false porque dentro de la función this apunta para global. Fuera apunta para .exports
}

logThis()