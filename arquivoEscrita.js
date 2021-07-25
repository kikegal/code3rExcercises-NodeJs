const fs = require('fs')

const produto ={
    nome:'Celular',
    preco: 1249.99,
    deconto: 0.15
}

//Habiendo requerido el modulo fs, creando un objeto, pasamos a generar la pasta

fs.writeFile(__dirname + '/arquivoGerado.json', JSON.stringify(produto), err=>{
    console.log(err || 'Arquivo salvo!')
})