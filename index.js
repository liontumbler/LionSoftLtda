import {Paises} from './paises.js';

console.time();
console.log('empiesa');

let paises = new Paises();

console.log(paises.obtenerPaises()); //.continente('america')
console.log(paises.obtenerPaisesXcontinente('america del sur'));



console.log(paises.obtenerCiudades('Argentina'));
console.log(paises.obtenerCiudades('Bolivia'));
console.log(paises.obtenerCiudades('Brasil'));
console.log(paises.obtenerCiudades('Chile'));
console.log(paises.obtenerCiudades('Colombia'));
console.log(paises.obtenerCiudades('Ecuador'));
console.log(paises.obtenerCiudades('Guyana'));
console.log(paises.obtenerCiudades('Paraguay'));
console.log(paises.obtenerCiudades('Perú'));
console.log(paises.obtenerCiudades('Surinam'));
console.log(paises.obtenerCiudades('Trinidad y Tobago'));
console.log(paises.obtenerCiudades('Uruguay'));
console.log(paises.obtenerCiudades('Venezuela'));



console.log(paises.obtenerPaisObj('colombia'));//.continente(continente)
console.log(paises.obtenerCiudadObj('colombia', 'bogota'));

console.log('termina');
console.timeEnd();