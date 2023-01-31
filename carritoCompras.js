class CarritoCompras {
    #carrito = null;
    moneda = 'COP';

    constructor(carrito = {}) {
        try{
            if (typeof carrito == 'object') {
                this.#carrito = carrito;
            }else if(typeof carrito == 'string'){
                this.#carrito = JSON.parse(carrito);
            }
        }catch(e){
            console.error(e, 'debe ser formato JSON');
        }
    }

    addCarrito(valor, cantidad, complemento = {}, guardar = 'id'){
        
        if (isNaN(valor)) {
            return console.error('El valor no es númerico');
        } 

        if (isNaN(cantidad)) {
            return console.error('El cantidad no es númerico');
        } 

        complemento.fullValue = (valor * cantidad);
        complemento.oneValue = valor;
        complemento.amount = cantidad;

        if (this.#carrito.allValue) {
            this.#carrito.allValue += complemento.fullValue;
        }else{
            this.#carrito.allValue = complemento.fullValue;
        }

        if(complemento[guardar]){
            this.#carrito[complemento[guardar]] = complemento;
        }else{
            this.#carrito[this.cantidadDproductos()] = complemento;
        }
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

    deleteCarrito(value = null){
        if (value) {
            if(this.#carrito[value]){
                this.#carrito.allValue = this.#carrito.allValue - this.#carrito[value].fullValue;
                delete this.#carrito[value];
            }else{
                return console.log('el valor a eliminarno existe');
            }
        }else{
            this.#carrito = {};
        }
    }

    comprar(valor) {
        if (valor >= this.#carrito.allValue) {
            let res = {
                valorApagar: this.#formatearPresio(this.#carrito.allValue),
                valor: this.#formatearPresio(valor),
                cambio: this.#formatearPresio((valor - this.#carrito.allValue))
            };

            this.#carrito = {};
            return res;
        }else{
            console.warn('El monto es inferior a la compra');
        }
        return false;
    }

    cantidadDproductos(){
        return Object.values(this.#carrito).length -1;
    }

    toStringCarrito(value = null){
        if (value) {
            return JSON.stringify(this.#carrito[value]);
        }else{
            return JSON.stringify(this.#carrito);
        }
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