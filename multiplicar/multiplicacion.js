const fs = require('fs'); //invocar un archivo objeto de filesystem no cambiar el 'fs' porqe asi lo tiene node.js 
//donde si podemos cambiar es en el nombre de la variable
let listarTabla = (base, limite = 10) => { //una funcion tipo flecha recibe sus parametros y enlista la tabla
    for (let i = 1; i <= limite; i++) {
        console.log(`${base}*${i}=${base * i}`);
    }

}
let crearArchivo = (base) => { //funcion tipo flecha que tiene una promesa resive un parametro base
    return new Promise((resolve, reject) => { //una promesa genera una logica lleva resolve y reject
        //let base = 1; //numero de la base de la tabal
        //  let table = '';
        let datos = '';
        for (let i = 1; i <= 10; i++) {
            //console.log(`${base} x ${i} = ${base*i}`);
            datos += `${base}*${i}=${base * i}\n`; //respuesta del profesor.
            //let tabla = `${i}.-${base} x ${i} = ${base * i}`;
            //table = `${table}\n${tabla}`
        }
        fs.writeFile(`tabla ${base}.txt`, `${datos}`, (error) => { //nombre del archivo ejemplo y el contenido del mismo y la flecha es para 
            //manipular el error (error) => 
            // if (error) throw error; //comprobacion booleana
            if (error) {
                reject(error); //regresa una funcion de error

            } else {
                resolve(`tabla-del-${base}.txt`); //regresa el resultado
            }
            console.log(`El archivo ejemplo ${base}.txt ha sido creado con exito`);



        });
    });
}

module.exports = { //diciendo al proyecto quee de este archivo queremos hacer publica la funcion ya qe en node.js son privadas y con module.exports
    //esporta funciones privadas aciendolas publicas
    crearArchivo,
    listarTabla
}