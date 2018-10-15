// requires
const fs = require('fs');
const colors = require('colors');

let listarTabla = (base, limite = 10) => {

    console.log('================================================'.red);
    console.log(`================Tabla de ${base}=====================`.red);
    console.log('================================================'.red);

    for (let i = 1; i <= limite; i++) {
        let multiplicacion = base * i;
        console.log(`${base} * ${i} = ${multiplicacion}`);
    }

}


let crearArchivo = (base, limite = 10) => {
    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject('No se puede ejecutar la creación del archivo, el número introducido NO es válido');
            return

        }

        let data = ''; // esto es para llenar el archivo que se va a crear con FileSystem

        for (let i = 1; i <= limite; i++) {
            let multiplicacion = base * i;
            data += ` ${base} * ${i} = ${multiplicacion} \n`;
        }

        fs.writeFile(`./tablas/tabla-${base}-al-${limite}.txt`, data, (err) => {
            if (err)
                reject(err)
            else
                resolve(`tabla-${base}-al-${limite}.txt`);

            // console.log(`El archivo tabla-${base}.txt ha sido creado`);
        });

    });
}


module.exports = {
    crearArchivo,
    listarTabla
}