import {Paises} from './paises.js';
(function () {
    
    let alfaNum = document.querySelectorAll('[type="text"]');//document.getElementsByClassName('alfaNumerico');
    for (const i of alfaNum) {
        i.addEventListener('keyup', function (e){
            this.value = this.value.replace(/[^0-9A-Za-zñÑ ]/g, '').replace(/\s+/g, ' ');
        });
    }

    let num = document.querySelectorAll('[type="number"]');//document.getElementsByClassName('Numerico');
    for (const i of num) {
        i.addEventListener('keyup', function (e){
            this.value = this.value.replace(/[^0-9]/g, '');
        });
    }

    let email = document.querySelectorAll('[type="email"]');//document.getElementsByClassName('Numerico');
    for (const i of email) {
        i.addEventListener('keyup', function (e){
            this.value = this.value.replace(/^((^(([a-zA-Z0-9]{1,15}[\_\-\.]{0,1}[a-zA-Z0-9]{1,15}){1,3}|[a-zA-Z0-9]{1,50})@([a-zA-Z0-9]{1,15}[\_\-\.]{0,1}[a-zA-Z0-9]{1,15}){1,3}|[a-zA-Z0-9]{1,50}\.[a-zA-Z]{2,5}){1,1})/g, '');
        });
    }

    console.log('se ejecuta', alfaNum);
})();


/** como utilizar paises 'descomentar'*/

/*
console.time();
console.log('empiesa');

let paises = new Paises();

console.warn('otros usos');
console.log(paises.obtenerPaises()); //.continente('america')
console.log(paises.obtenerPaisObj('colombia'));//.continente(continente)
console.log(paises.obtenerCiudadObj('colombia', 'bogota'));

console.warn('america del sur');
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

console.warn('América central');
console.log(paises.obtenerPaisesXcontinente('América central'));

console.log(paises.obtenerCiudades('Belice'));
console.log(paises.obtenerCiudades('Costa Rica'));
console.log(paises.obtenerCiudades('El Salvador'));
console.log(paises.obtenerCiudades('Guatemala'));
console.log(paises.obtenerCiudades('Honduras'));
console.log(paises.obtenerCiudades('Nicaragua'));
console.log(paises.obtenerCiudades('Panamá'));
console.log(paises.obtenerCiudades('México'));


console.log('termina');
console.timeEnd();
*/