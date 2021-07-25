const fs = require('fs')

const caminho = __dirname + '/arquivo.json'

//Ler o arquivo de forma sincrona:

const conteudo = fs.readFileSync(caminho, 'utf-8')
console.log(conteudo)

//Ler de forma assincrona:

fs.readFile(caminho, 'utf-8', (err,conteudo) => {
    const config = JSON.parse(conteudo)
    console.log(`${config.db.host}:${config.db.port}`)
})

//Ler um arquivo .json em geral

const config = require('./arquivo.json')
console.log(config.db)

//Ler uma Pasta do diretorio

fs.readdir(__dirname, (err, arquivos) =>{
    console.log('Conteudo da Pasta')
    console.log(arquivos)
})