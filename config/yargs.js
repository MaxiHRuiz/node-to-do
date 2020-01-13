let descripcion = {
    demand: true,
    alias: 'd'
}
let completado = {
    alias: 'c',
    default: true
}

const argv = require('yargs') // eslint-disable-line
    .command('crear', 'Crear un elemento por hacer', {
        descripcion
    })
    .command('actualizar', 'Actualiza el estado completo de uan tarea', {
        descripcion,
        completado
    })
    .command('borrar', 'Borra una tarea', {
        descripcion
    })
    .help()
    .argv;

module.exports = {
    argv
}