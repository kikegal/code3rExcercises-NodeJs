module.exports = function(...nomes) { //los ... es para recibir varios nombres
    return nomes.map (nome => `Boa semana ${nome}!`)
}