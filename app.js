const { crearArchivo } = require('./multiplicar/multiplicar');

let base = 'c';

crearArchivo(base)
    .then(archivo => console.log(`File save: ${archivo}`))
    .catch(err => console.log(err));