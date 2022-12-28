import {Paises} from './paises.js';

console.time();
console.log('empiesa');

let paises = new Paises();

console.log(paises.obtenerPaises()); //.continente('america')
console.log(paises.obtenerPaisesXcontinente('america'));
console.log(paises.obtenerCiudades('Surinam'));
console.log(paises.obtenerPaisObj('colombia'));//.continente(continente)
console.log(paises.obtenerCiudadObj('colombia', 'bogota'));

console.log('termina');
console.timeEnd();