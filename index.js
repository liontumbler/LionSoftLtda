import {Paises} from './Paises.js';
import {ValidForm} from './ValidForm.js';
import {CarritoCompras} from './CarritoCompras.js';

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

console.warn('Asia');
console.log(paises.obtenerPaisesXcontinente('Asia'));

console.warn('Oceanía');
console.log(paises.obtenerPaisesXcontinente('Oceanía'));

console.warn('Antártida');
console.log(paises.obtenerPaisesXcontinente('Antártida'));


console.log('termina');
console.timeEnd();


//validador de formularios
let testVal = new ValidForm('formtest');

document.getElementById('clicktest').addEventListener('click', function(e) {
    e.preventDefault();
    console.log(testVal.validarCampos());
    console.log(testVal.crearObjetoJson());
    console.log(testVal.crearFormData());
});


//carrito de compras
let carrito = new CarritoCompras();
carrito.addCarrito(1200, 12, {id:1, name:'name'})
carrito.addCarrito(1200, 11, {id:2, name:'name'})
carrito.addCarrito(1200, 10, {id:3, name:'name'})
carrito.addCarrito(1200, 9, {id:4, name:'name'})
console.log(carrito.getCarrito());
carrito.deleteCarrito(3);
console.log(carrito.getCarrito(), carrito.cantidadDproductos());
console.log(carrito.total);
console.log(carrito.comprar(100000));