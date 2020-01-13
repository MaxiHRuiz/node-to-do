const argv = require('./config/yargs').argv;
const colors = require('colors');
const porHacer = require('./por-hacer/por-hacer');


console.log(argv);

let comando = argv._[0];

switch (comando) {
    case 'crear':
        let tarea = porHacer.crear(argv.descripcion);
        console.log(tarea);
        break;
    case 'listar':
        let listado = porHacer.getListado();

        listado.forEach(tarea => {
            console.log('====== Por Hacer ======'.green);
            console.log(tarea.descripcion);
            console.log('Estado: ', tarea.completado);
            console.log('======================='.green);
        });
        break;
    case 'actualizar':
        let actualizado = porHacer.actualizarTarea(argv.descripcion, argv.completado);
        if (!actualizado) {
            console.log('No se pudo actualizar la tarea.');
        }
        break;
    case 'borrar':
        let borrado = porHacer.borrar(argv.descripcion);
        console.log('Tarea borrada: ', borrado);
        break;
    default:
        console.log('Comando no reconocido');
        break;
}