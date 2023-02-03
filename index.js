import {Paises} from './Paises.js';
import {ValidForm} from './ValidForm.js';
import {CarritoCompras} from './CarritoCompras.js';
import {EjecutadorJs} from './EjecutadorJs.js';

/*como utilizar las librerias?*/
console.time();
console.log('empiesa');

let paises = new Paises();

console.warn('otros usos');
console.log(paises.obtenerPaises());
console.log(paises.obtenerPaisObj('colombia'));
console.log(paises.obtenerCiudadObj('colombia', 'bogota'));

console.warn('América del sur');
let as = paises.obtenerPaisesXcontinente('América del sur');
for (const i in as) {
    console.log(as[i]);
    console.log(paises.obtenerCiudades(as[i]));
}

console.warn('América central');
let ac = paises.obtenerPaisesXcontinente('América central');
for (const i in ac) {
    console.log(ac[i]);
    console.log(paises.obtenerCiudades(ac[i]));
}

console.warn('América del norte');
let an = paises.obtenerPaisesXcontinente('América del norte');
for (const i in an) {
    console.log(an[i]);
    console.log(paises.obtenerCiudades(an[i]));
}

console.warn('África');
let af = paises.obtenerPaisesXcontinente('África');
for (const i in af) {
    console.log(af[i]);
    console.log(paises.obtenerCiudades(af[i]));
}

console.warn('Europa');
let e = paises.obtenerPaisesXcontinente('Europa');
for (const i in e) {
    console.log(e[i]);
    console.log(paises.obtenerCiudades(e[i]));
}

console.warn('Asia');
let a = paises.obtenerPaisesXcontinente('Asia');
for (const i in a) {
    console.log(a[i]);
    console.log(paises.obtenerCiudades(a[i]));
}

console.warn('Oceanía');
let o = paises.obtenerPaisesXcontinente('Oceanía');
for (const i in o) {
    console.log(o[i]);
    console.log(paises.obtenerCiudades(o[i]));
}

console.warn('Antártida');
let ant = paises.obtenerPaisesXcontinente('Antártida');
for (const i in ant) {
    console.log(ant[i]);
    console.log(paises.obtenerCiudades(ant[i]));
}

console.log('termina');
console.timeEnd();


console.warn('validador de formularios');
let testVal = new ValidForm('formtest');
document.getElementById('clicktest').addEventListener('click', function(e) {
    e.preventDefault();
    console.log(testVal.validarCampos());
    console.log(testVal.crearObjetoJson());
    console.log(testVal.crearFormData());
    testVal.limpiarForm();
});


console.warn('carrito');
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


console.warn('ejecutador');
let ejecu = new EjecutadorJs();
console.log(ejecu.horaActual());
console.log(ejecu.comparaTiempos('07:38', '07:38:23'));
ejecu.addTareaEjecutar(function() {
    alert('ejecucion a tiempo mi papa')
}, '07:41:00');

ejecu.addTareaEjecutar(function() {
    alert('ejecucion a tiempo mi papa 2')
}, '08:10');
