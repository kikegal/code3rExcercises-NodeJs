// O padrão Middleware ( chain of responsability)

const passo1 = (ctx, next) =>{
    ctx.valor1 = 'mid1'
    next()
}

const passo2 = (ctx, next) =>{
    ctx.valor2 = 'mid2'
    next()
}

const passo3 = ctx =>ctx.valor3 = 'mid3'

//Una vez creado los tres objetos, vamos a crear la función que va a ejecutar next

const exec = (ctx, ...middlewares) => {   //con ...(operador rest) para captar varios objetos y agruparlos en un array
    const execPasso = indice => { //para cada ejecución será atribuido un atributo indice
        middlewares && indice < middlewares.length &&
        middlewares[indice](ctx, () => execPasso(indice + 1)) // aqui pasando el indice y la ejecucion de la funcion y la función next que va a ser una arrow
    }
    execPasso(0)
}

const ctx = {}
exec(ctx, passo1, passo2, passo3) //pudiendo cambiar el orden de las gunciones internas, siempre que tenga el next incluido, como passo1 y passo2
console.log (ctx)