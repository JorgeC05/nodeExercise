const options = {
    base: {
        demand: true,
        alias: 'b'
    },
    limite: {
        alias: 'l',
        default: 10
    }
}

const argv = require('yargs')
    .command('listar', 'Imprime en consola la tabla de Multiplicar', options)
    .command('crear', 'Crea un archivo txt con base a los parametros escritos', options)
    .help()
    .argv;


module.exports = {
    argv
}