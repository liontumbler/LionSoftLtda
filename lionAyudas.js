export class LionAyudas {
    #regexCorreo = /(^(([a-zA-Z0-9]{1,15}([\_\-\.]{0,1}[a-zA-Z0-9]{1,15}[\_\-\.]{0,1}){0,15}[a-zA-Z0-9]{1,15}){1,3}|[a-zA-Z0-9]{1,50})[@]{1,1}(([a-zA-Z0-9]{1,15}([\_\-\.]{0,1}[a-zA-Z0-9]{1,15}[\_\-\.]{0,1}){0,15}[a-zA-Z0-9]{1,15}){1,3}|[a-zA-Z0-9]{1,50})\.[a-zA-Z]{2,5}){1,1}$/g;
    #regexSoloLetras = /^[a-zA-ZÑñ]+/g;

    validarCorreo(value) {
        let valido = false;
        if(this.#regexCorreo.test(value))
            valido = true;

        return valido;
    }

    validarSoloLetras(value) {
        let valido = false;
        if(this.#regexSoloLetras.test(value))
            valido = true;

        return valido;
    }

    validarCadenaAlfaNumerica(value) {
        let valido = false;
        if(value && isNaN(value))
            valido = true;

        return valido;
    }

    validarSoloNumeros(value) {
        let valido = false;
        if(!isNaN(value))
            valido = true;

        return valido;
    }

    normalizarText(cadena) {
        let cadenaRetorno = cadena.toLowerCase().replace(/[á|à|â|ä|ã|å]/g, 'a');
        cadenaRetorno = cadenaRetorno.replace(/[é|è|ê|ë]/g, 'e');
        cadenaRetorno = cadenaRetorno.replace(/[í|ì|î|ï]/g, 'i');
        cadenaRetorno = cadenaRetorno.replace(/[ó|ò|ô|õ|ö]/g, 'o');
        cadenaRetorno = cadenaRetorno.replace(/[ú|ù|û|ü]/g, 'u');
        cadenaRetorno = cadenaRetorno.replace(/[ý|ÿ]/g, 'y');

        return cadenaRetorno;
    }
}