/**
 * 
 * @author    Edwin Velasquez Jimenez
 * @copyright lionTumbler
*/
class EjecutadorJs {
    #ejecuciones = {};

    constructor() {
        setInterval(() => {
            if(this.#ejecuciones[this.horaActual()]){
                this.#ejecuciones[this.horaActual()]();
                this.#ejecuciones[this.horaActual()].ejecuto = true;
            }else if(this.#ejecuciones[this.horaActualSinSeg()] && !this.#ejecuciones[this.horaActualSinSeg()].ejecuto){
                this.#ejecuciones[this.horaActualSinSeg()]();
                this.#ejecuciones[this.horaActualSinSeg()].ejecuto = true;
            }
        }, 1000);
    }

    horaActual() {
        const fechaActual = new Date();
        let hora = fechaActual.getHours();
        let minuto = fechaActual.getMinutes();
        let segundo = fechaActual.getSeconds();
        
        if (hora < 10) 
            hora = "0" + hora;
        
        if (minuto < 10)
            minuto = "0" + minuto;

        if (segundo < 10)
            segundo = "0" + segundo;
    
        return hora + ':' + minuto + ':' + segundo;
    }

    horaActualSinSeg() {
        const fechaActual = new Date();
        let hora = fechaActual.getHours();
        let minuto = fechaActual.getMinutes();
    
        if (hora < 10) 
            hora = "0" + hora;

        if (minuto < 10)
            minuto = "0" + minuto;
    
        return hora + ':' + minuto;
    }

    addTareaEjecutar(metodo, tiempo = this.horaActual()){
        this.#ejecuciones[tiempo] = metodo;
    }

    comparaTiempos(hora1 = this.horaActual(), hora2 = this.horaActual()) {
        const diviHora1 = hora1.split(':');
        const diviHora2 = hora2.split(':');

        let largo;
        if(diviHora1.length < diviHora2.length)
            largo = diviHora1.length;
        else if (diviHora2.length < diviHora1.length)
            largo = diviHora2.length;
        else
            largo = diviHora1.length;

        let coicidencias = 0;
        for (let i = 0; i < largo; i++) {
            if (diviHora1[i] == diviHora2[i])
                coicidencias++;
        }

        let valido = false;
        if (coicidencias >= largo)
            valido = true;

        return valido;
    }
}

export {EjecutadorJs};