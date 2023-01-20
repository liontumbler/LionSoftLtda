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
        cadenaRetorno = cadenaRetorno.replace(/[ó|ò|ô|õ|ö|ø]/g, 'o');
        cadenaRetorno = cadenaRetorno.replace(/[ú|ù|û|ü]/g, 'u');
        cadenaRetorno = cadenaRetorno.replace(/[ý|ÿ]/g, 'y');
        cadenaRetorno = cadenaRetorno.replace(/[ş|ș]/g, 's');
        cadenaRetorno = cadenaRetorno.replace(/[æ]/g, 'ae');
        cadenaRetorno = cadenaRetorno.replace(/[ç]/g, 'c');
        return cadenaRetorno;
    }

    static addList(input, data) {
        if(input.tagName == 'INPUT') {
            if (!input.getAttribute('list')) {
                input.setAttribute('list', input.id +'List')
            }

            let list = document.getElementById(input.id +'List');
            if(!list){
                list = document.createElement('datalist')
                list.id = input.id +'List';
                input.parentNode.append(list)
            }

            if (Array.isArray(data)) {
                for (const i in data) {
                    let option = document.createElement("option");
                    console.log(data, i, data[i]);
                    option.setAttribute("value", data[i]);
                    list.append(option);
                }
            }else{
                let option = document.createElement("option");
                option.setAttribute("value", data);
                list.append(option);
            }
        } else {
            console.warn('no es un input');
        }
    }

    //let form2 = form.cloneNode(true);
}

export class ValForm {
    #form = undefined;
    #form2 = undefined;
    constructor(elemt){
        this.#form = document.getElementById(elemt)
        if (document[elemt]) {
            this.#form = document[elemt]
        } else if (!document.getElementById(elemt)) {
            console.log('el formulario nombrado no existe');
        }

        let style = document.createElement('style');

        let paddingRight = '28px';
        style.innerHTML = `
        .pw svg{
            position: absolute;
            top: 0;
            right: 0;
            cursor: pointer;
            width: 29px;
            height: 100%;
            text-align: center;
            writing-mode: vertical-rl;
            padding-right: 7px;
            padding-left: 7px;
        }
        .pw [type="password"]{
            padding-right: `+ paddingRight +`;
        }
        .pw [type="text"]{
            padding-right: `+ paddingRight +`;
        }
        .pw{
            position: relative;
        }
        input{
            width: 100%;
        }
        `;
        document.getElementsByTagName('head')[0].append(style);

        let eye = `<path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z"/>
                    <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z"/>`;

        let botonEye = this.#form.getElementsByClassName('pw');
        for (const i of botonEye) {
            let anteshtml;
            let anteshtmlCadena = '';
            if (i.children[0]) {
                anteshtml = i.children[0];
                anteshtmlCadena = anteshtml.outerHTML
            }else{
                anteshtmlCadena = '<input type="password" id="pw'+i+'">'
            }

            i.innerHTML = anteshtmlCadena + `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye eye" viewBox="0 0 16 16">
                    `+ eye +`
                </svg>`;
        }

        for (const i of botonEye) {
            if (i.children[1]) {
                i.children[1].addEventListener('click', function (e) {
                    if(this.classList.contains('eye')){
                        i.children[0].type = 'text';
                        this.classList.add("eye-s");
                        this.classList.remove("eye");
                        this.innerHTML = `<path d="M13.359 11.238C15.06 9.72 16 8 16 8s-3-5.5-8-5.5a7.028 7.028 0 0 0-2.79.588l.77.771A5.944 5.944 0 0 1 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.134 13.134 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755-.165.165-.337.328-.517.486l.708.709z"/>
                                            <path d="M11.297 9.176a3.5 3.5 0 0 0-4.474-4.474l.823.823a2.5 2.5 0 0 1 2.829 2.829l.822.822zm-2.943 1.299.822.822a3.5 3.5 0 0 1-4.474-4.474l.823.823a2.5 2.5 0 0 0 2.829 2.829z"/>
                                            <path d="M3.35 5.47c-.18.16-.353.322-.518.487A13.134 13.134 0 0 0 1.172 8l.195.288c.335.48.83 1.12 1.465 1.755C4.121 11.332 5.881 12.5 8 12.5c.716 0 1.39-.133 2.02-.36l.77.772A7.029 7.029 0 0 1 8 13.5C3 13.5 0 8 0 8s.939-1.721 2.641-3.238l.708.709zm10.296 8.884-12-12 .708-.708 12 12-.708.708z"/>`;
                    }else{
                        i.children[0].type = 'password';
                        this.classList.add("eye");
                        this.classList.remove("eye-s");
                        this.innerHTML = eye;
                    }
                })
            }
        }

        this.#form2 = this.#form.cloneNode(true);

        //for (let i = 0; i < this.#form2.length; i++) {
            //console.log(this.#form2, i, this.#form[i]);
        //}
    }

    getId(id) {
        return this.#form.querySelectorAll('[id="'+id+'"]')[0];
    }

    #getId(id) {
        return this.#form2.querySelectorAll('[id="'+id+'"]')[0];
    }

    validarId(id){//text number email
        console.log(id, this.#form, this.#form2);

        let input = this.getId(id);
        let inputReal = this.#getId(id);

        inputReal.value = input.value;
        inputReal.cheked = input.cheked;
        inputReal.name = input.name;
        console.log(inputReal.required, inputReal.type, inputReal.value);

        if (inputReal.required) {
            if(inputReal.value){

                let value = inputReal.value;

                //if ($("#"+campos[i]).attr('regex') && !new RegExp($("#"+ campos[i]).attr('regex'), "g").test($("#"+campos[i]).val())) {
                //    valido = false;
                //    msg($this, i + ', no corresponde a la exprecion regular: '+ $("#"+campos[i]).attr('regex'));
                //    break;
                //}
                
                const validityState = inputReal.validity;
                let valido = true;
                switch (inputReal.type) {
                    case 'email':
                        let regexCorreo = /(^(([a-zA-Z0-9]{1,15}([\_\-\.]{0,1}[a-zA-Z0-9]{1,15}[\_\-\.]{0,1}){0,15}[a-zA-Z0-9]{1,15}){1,3}|[a-zA-Z0-9]{1,50})[@]{1,1}(([a-zA-Z0-9]{1,15}([\_\-\.]{0,1}[a-zA-Z0-9]{1,15}[\_\-\.]{0,1}){0,15}[a-zA-Z0-9]{1,15}){1,3}|[a-zA-Z0-9]{1,50})\.[a-zA-Z]{2,5}){1,1}$/g;
                        if(!regexCorreo.test(value)){
                            valido = false;
                            break;
                        }
                    case 'password':
                    case 'search':
                    case 'tel':
                    case 'url':
                    case 'text':
                        if (inputReal.getAttribute('maxlength') && value.length > inputReal.getAttribute('maxlength')) {
                            valido = false;
                            break;
                        }

                        if (inputReal.getAttribute('minlength') && value.length < inputReal.getAttribute('minlength')) {
                            valido = false;
                            break;
                        }

                        if (!value) {
                            valido = false;
                            break;
                        }
                        break;

                    case 'date':
                    case 'datetime-local':
                    case 'month':
                    case 'time':
                    case 'week':
                        
                        if (validityState.rangeOverflow) {
                            valido = false;
                            break;
                        }

                        if (validityState.rangeUnderflow) {
                            valido = false;
                            break;
                        }

                        if (validityState.stepMismatch) {
                            valido = false;
                            break;
                        }

                        //patternMismatch
                        break;
                    case 'range':
                    case 'number':
                        if(inputReal.getAttribute('min') && isNaN(inputReal.getAttribute('min'))){
                            valido = false;
                            break;
                        }

                        if(inputReal.getAttribute('max') && isNaN(inputReal.getAttribute('max'))){
                            valido = false;
                            break;
                        }

                        if (inputReal.setAttribute('max') && value > inputReal.setAttribute('max')) {
                            valido = false;
                            break;
                        }

                        if (inputReal.setAttribute('min') && value < inputReal.setAttribute('min')) {
                            valido = false;
                            break;
                        }

                        if (!value) {
                            valido = false;
                            break;
                        }

                        break;
                    case 'file':
                        break;
                    case 'color':
                        break;
                    case 'hidden':
                        break;
                    case 'image':
                        break;
                    case 'checkbox':
                        if (!inputReal.cheked) {
                            valido = false;
                            break;
                        }
                        break;
                    case 'radio':
                        if(inputReal.name){
                            if (!this.#form2.querySelector('input[name="' + inputReal.name + '"]:checked')) {
                                valido = false;
                                break;
                            }
                        }else{
                            console.warn('el radio buton requerido no tiene un name asociado');
                            valido = false;
                            break;
                        }
                        
                        break;
                    default:
                        console.warn('tipo indefinido');
                        valido = true;
                        break;
                }

                if(!valido){
                    input.reportValidity();
                    input.focus();
                    input.select();
                }

                return valido;
            }else{
                input.reportValidity();
                input.focus();
                input.select();
                console.warn('no tiene value el campo requerido con id '+ inputReal.id);
                return false;
            }
        }else{
            return true;
        }

        
        /**/
        //form2[i].checkValidity()
        //form[i].setCustomValidity(text);
        //form[i].reportValidity();
        /*if(!inputReal.value){
            alert()
        }*/
    }

    validarCampos() {
        let inputs = this.#form.getElementsByTagName('INPUT');
        //console.log(inputs);
        
        let valido = true;
        for (let i = 0; i < inputs.length; i++) {
            if(inputs[i].type != 'button' && inputs[i].type != 'submit' && inputs[i].type != 'reset'){
                console.log(inputs[i], i, inputs[i].id, this.#form);
                let valido = this.validarId(inputs[i].id);
                if(!valido){
                    break;
                }
            }
        }

        return valido;
    }
}