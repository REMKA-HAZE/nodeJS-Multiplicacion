const { crearArchivo, listarTabla } = require('./multiplicar/multiplicacion'); //importando nuestro archivo multiplicacion
const argumentos = require('yargs') //para importar un paquete de npm solo ponerle el nombre
    .command('listar', 'Imprime en consola la tabla de multiplicar', { //comando reconocible en la consola "listar"
        base: {
            demand: true, //para que si o si pase el parametro
            alias: 'b' //base de mi parametro es como un alias literal del parametro base
        },
        limite: { //limite de la base y su alias l ele
            alias: 'l',
            default: 10 // para que solo corra hasta el diez 
        }
    })
    .command('crear', 'crea', {
        base: {
            demand: true, //para que si o si pase el parametro
            alias: 'b' //base de mi parametro es como un alias literal del parametro base
        },
        limite: { //limite de la base y su alias l ele
            alias: 'l',
            default: 10 // para que solo corra hasta el diez 
        }


    })
    .help() //lista de ayudas
    .argv;
let base = 7;
let comando = argumentos._[0];
switch (comando) {
    case 'listar':
        listarTabla(argumentos.base, argumentos.limite);
        break;
    case 'crear':
        crearArchivo(argumentos.base);
        break;

    default:
        console.log(`Comando no reconocido: ${comando}`);
}

// crearArchivo(base)
// .then(respuesta => console.log(`archivo creado: ${respuesta}`))

// .catch(error => console.error());