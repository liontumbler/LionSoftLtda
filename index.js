import {Paises} from './paises.js';
import * as onload from './onload.js';
import {ValForm} from './lionAyudas.js';



/** como utilizar paises 'descomentar'*/
console.time();
console.log('empiesa');

let paises = new Paises();

console.warn('otros usos');
console.log(paises.obtenerPaises()); //.continente('america')
console.log(paises.obtenerPaisObj('colombia'));//.continente(continente)
console.log(paises.obtenerCiudadObj('colombia', 'bogota'));

console.warn('América del sur');
console.log(paises.obtenerPaisesXcontinente('América del sur'));

//console.log(paises.obtenerCiudades('Argentina'));
//console.log(paises.obtenerCiudades('Bolivia'));
//console.log(paises.obtenerCiudades('Brasil'));
//console.log(paises.obtenerCiudades('Chile'));
//console.log(paises.obtenerCiudades('Colombia'));
//console.log(paises.obtenerCiudades('Ecuador'));
//console.log(paises.obtenerCiudades('Guyana'));
//console.log(paises.obtenerCiudades('Paraguay'));
//console.log(paises.obtenerCiudades('Perú'));
//console.log(paises.obtenerCiudades('Surinam'));
//console.log(paises.obtenerCiudades('Trinidad y Tobago'));
//console.log(paises.obtenerCiudades('Uruguay'));
//console.log(paises.obtenerCiudades('Venezuela'));

console.warn('América central');
console.log(paises.obtenerPaisesXcontinente('América central'));

//console.log(paises.obtenerCiudades('Belice'));
//console.log(paises.obtenerCiudades('Costa Rica'));
//console.log(paises.obtenerCiudades('El Salvador'));
//console.log(paises.obtenerCiudades('Guatemala'));
//console.log(paises.obtenerCiudades('Honduras'));
//console.log(paises.obtenerCiudades('Nicaragua'));
//console.log(paises.obtenerCiudades('Panamá'));
//console.log(paises.obtenerCiudades('México'));

console.warn('América del norte');
console.log(paises.obtenerPaisesXcontinente('América del norte'));

console.warn('África');
console.log(paises.obtenerPaisesXcontinente('África'));

console.warn('Europa');
console.log(paises.obtenerPaisesXcontinente('Europa'));

console.warn('Oceanía');
console.log(paises.obtenerPaisesXcontinente('Oceanía'));

console.warn('Antártida');
console.log(paises.obtenerPaisesXcontinente('Antártida'));


console.log('termina');
console.timeEnd();

////

let testVal = new ValForm('formtest');

setTimeout(() => {
    testVal.validarCampos();
}, 8000);