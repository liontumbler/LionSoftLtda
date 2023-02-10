/**
 * 
 * @author    Edwin Velasquez Jimenez
 * @copyright lionTumbler
*/
class CarritoCompras {
    #carrito = {};
    moneda = 'COP';

    constructor() {
        if (localStorage.carrito) {
            this.#carrito = JSON.parse(localStorage.carrito);
        }
    }

    addCarrito(valor, cantidad, complemento = {}, guardar = 'id'){
        
        if (isNaN(valor))
            return console.error('El valor no es númerico');

        if (isNaN(cantidad)) 
            return console.error('El cantidad no es númerico');

        complemento.fullValue = (valor * cantidad);
        complemento.oneValue = valor;
        complemento.amount = cantidad;

        if (this.#carrito['allValue'])
            this.#carrito['allValue'] += complemento.fullValue;
        else
            this.#carrito['allValue'] = complemento.fullValue;

        if(complemento[guardar])
            this.#carrito[complemento[guardar]] = complemento;
        else
            this.#carrito[this.cantidadDproductos()] = complemento;

        localStorage.carrito = this.toStringCarrito();
    }

    get total() {
        if(this.#carrito.allValue){
            return this.#carrito.allValue;
        }else{
            return 0;
        }
    }

    getCarrito(value = null){
        if (value) {
            return this.#carrito[value];
        }else{
            return this.#carrito;
        }
    }

    actualizarPrecioProducto(value, valor){
        if(this.#carrito[value] && this.#carrito[value].oneValue) {
            this.#carrito['allValue'] = this.#carrito['allValue'] - this.#carrito[value].fullValue;

            this.#carrito[value].fullValue = (valor * this.#carrito[value].amount);
            this.#carrito[value].oneValue = valor;

            this.#carrito['allValue'] = this.#carrito['allValue'] + this.#carrito[value].fullValue;
            localStorage.carrito = this.toStringCarrito();
        } else {
            console.warn('no se encontro el value a descontar');
        }
    }

    deleteCatidadProducto(value, cantidad) {
        if(this.#carrito[value] && this.#carrito[value].amount){
            let cantidadC = this.#carrito[value].amount;
            if (cantidad < cantidadC) {
                let adescontar = (this.#carrito[value].oneValue * cantidad);

                this.#carrito[value].fullValue = this.#carrito[value].fullValue - adescontar;
                this.#carrito.allValue = this.#carrito.allValue - adescontar;
                localStorage.carrito = this.toStringCarrito();
            }else{
                console.warn('no se pueden descontar mas toca eliminar el producto');
            }
        } else {
            console.warn('no se encontro el value a descontar');
        }
    }

    deleteCarrito(value = null){
        if (value) {
            if(this.#carrito[value]){
                this.#carrito.allValue = this.#carrito.allValue - this.#carrito[value].fullValue;
                delete this.#carrito[value];
                localStorage.carrito = this.toStringCarrito();
            }else{
                return console.log('El valor a eliminar no existe');
            }
        }else{
            this.#carrito = {};
        }
    }

    comprar(valor) {
        if (valor >= this.#carrito.allValue) {
            const res = {
                valorApagar: this.#formatearPresio(this.#carrito.allValue),
                valor: this.#formatearPresio(valor),
                cambio: this.#formatearPresio((valor - this.#carrito.allValue))
            };

            this.deleteCarrito();
            return res;
        }else{
            console.warn('El monto es inferior a la compra');
        }
        return {};
    }

    cantidadDproductos(){
        return Object.values(this.#carrito).length -1;
    }

    toStringCarrito(value = null){
        if (value) 
            return JSON.stringify(this.#carrito[value]);
        else
            return JSON.stringify(this.#carrito);
    }

    #formatearPresio(value, currency = this.moneda) {
        const precio = new Intl.NumberFormat("es-ES", {
            style: "currency",
            currency: currency,
        }).format(value)

        return precio;
    }
}

export {CarritoCompras};