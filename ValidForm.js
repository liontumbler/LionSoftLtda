export class ValidForm {//response.sort((x, y) => x.Title.localeCompare(y.Title)); //organisa un objeto
    #form = undefined;
    #form2 = undefined;

    static #alfa = /[^A-Za-zñÑ ]/g;
    static #alfaNS = /[^A-Za-zñÑ]/g;
    static #textNS = /[^0-9A-Za-zñÑ]/g;
    static #text = /[^0-9A-Za-zñÑ ]/g;
    static #number = /[^0-9]/g;
    static #numberP =/(\d)(?=(\d{3})+(?!\d))/g;
    static #space = /\s+/g;

    url = /https:\/\/.{1,200}|http:\/\/.{1,200}/g;
    regexCorreo = /(^(([a-zA-Z0-9]{1,15}([\_\-\.]{0,1}[a-zA-Z0-9]{1,15}[\_\-\.]{0,1}){0,15}[a-zA-Z0-9]{1,15}){1,3}|[a-zA-Z0-9]{1,50})[@]{1,1}(([a-zA-Z0-9]{1,15}([\_\-\.]{0,1}[a-zA-Z0-9]{1,15}[\_\-\.]{0,1}){0,15}[a-zA-Z0-9]{1,15}){1,3}|[a-zA-Z0-9]{1,50})\.[a-zA-Z]{2,5}){1,1}$/g;
    formatoFile= /jpg|jpeg|png|gif/g;

    constructor(elemt){
        this.#form = document.getElementById(elemt)
        if (document[elemt]) {
            this.#form = document[elemt]
        } else if (!document.getElementById(elemt)) {
            console.log('el formulario nombrado no existe');
        }

        this.#form2 = this.#form.cloneNode(true);

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

        //for (let i = 0; i < this.#form2.length; i++) {
            //console.log(this.#form2, i, this.#form[i]);
        //}

        for (const i of this.#form.querySelectorAll('[input="alfaNS"]')) {
            i.addEventListener('input', function (e){
                this.value = this.value.replace(ValidForm.#alfaNS, '');
            });
        }

        for (const i of this.#form.querySelectorAll('[input="textNS"]')) {
            i.addEventListener('input', function (e){
                this.value = this.value.replace(ValidForm.#textNS, '');
            });
        }

        for (const i of this.#form.querySelectorAll('[input="number"]')) {
            i.addEventListener('input', function (e){
                this.value = this.value.replace(ValidForm.#number, '');
            });
        }

        for (const i of this.#form.querySelectorAll('[input="alfa"]')) {
            i.addEventListener('input', function (e){
                this.value = this.value.replace(ValidForm.#alfa, '').replace(ValidForm.#space, ' ');
            });
        }

        for (const i of this.#form.querySelectorAll('[input="text"]')) {
            i.addEventListener('input', function (e){
                this.value = this.value.replace(ValidForm.#text, '').replace(ValidForm.#space, ' ');
            });
        }

        for (const i of this.#form.querySelectorAll('[input="numberP"]')) {
            i.addEventListener('input', function (e){
                this.value = this.value.replace(ValidForm.#number, '').replace(ValidForm.#numberP, '$1.');
            });
        }
    }

    getId(id) {
        return this.#form.querySelectorAll('[id="'+id+'"]')[0];
    }

    #getId(id) {
        return this.#form2.querySelectorAll('[id="'+id+'"]')[0];
    }

    validarCampoCorreo(value) {
        let valido = false;
        if(this.regexCorreo.test(value))
            valido = true;

        return valido;
    }

    validarNumCaracteres(value, maxlength, minlength) {
        let valido = true;

        if (maxlength && value.length > maxlength)
            valido = false;

        if (minlength && value.length < minlength)
            valido = false;

        if (!value)
            valido = false;

        return valido;
    }

    validarMaxMin(value, max, min) {
        let valido = true;

        if(min && isNaN(min))
            valido = false;

        if(max && isNaN(max))
            valido = false;

        if (max && value > max)
            valido = false;

        if (min && value < min)
            valido = false;

        if (!value)
            valido = false;

        return valido;
    }

    crearObjetoJson(conVacios = false) {
        let data = {};
        let inputs = this.#form.getElementsByTagName('INPUT');

        for (let i = 0; i < inputs.length; i++) {
            let input = inputs[i];
            if(input.type != 'button' && input.type != 'submit' && input.type != 'reset'){
                console.log(input);
                if(input.type == 'file' && input.files.length > 0){
                    data['files'] = input.files;
                }else if(input.type == 'checkbox'){
                    let label = this.#form.querySelectorAll('[for="'+ input.id +'"]')[0];
                    let value = input.value ? input.value : 0;
                    let title = input.id;//label ? label.textContent : input.id;

                    if (input.cheked) {
                        value = value == 0 ? 1 : value;
                        data[title] = value;
                    }else{
                        data[title] = 0;
                    }
                }else if(input.type == 'radio'){
                    let radioEscogido = this.#form.querySelector('input[name="' + input.name + '"]:checked')[0];
                    let value = radioEscogido.value ? radioEscogido.value : 1;

                    if (radioEscogido) {
                        formData.append(input.name, value);
                        data[input.name] = value;
                    }else if(conVacios){
                        data[input.name] = 0;
                    }
                }else{
                    let label = this.#form.querySelectorAll('[for="'+ input.id +'"]')[0];
                    let title = input.id;//label ? label.textContent : input.id;

                    if(input.value){
                        data[title] = input.value;
                    }else if(conVacios){
                        data[title] = null;
                    }
                }
            }
        }

        return data;
    }

    crearFormData(conVacios = false) {
        let formData = new FormData();
        let inputs = this.#form.getElementsByTagName('INPUT');

        for (let i = 0; i < inputs.length; i++) {
            let input = inputs[i];
            if(input.type != 'button' && input.type != 'submit' && input.type != 'reset'){
                if(input.type == 'file' && input.files.length > 0){
                    for (const i in input.files.length) {
                        formData.append(input.id + '[]', input.files[i]);
                    }
                }else if(input.type == 'checkbox'){
                    let label = this.#form.querySelectorAll('[for="'+ input.id +'"]')[0];
                    let value = input.value ? input.value : 0;
                    let title = input.id;//label ? label.textContent : input.id;

                    if (input.cheked) {
                        value = value == 0 ? 1 : value;
                        formData.append(title, value);
                    }else{
                        formData.append(title, 0);
                    }
                }else if(input.type == 'radio'){
                    let radioEscogido = this.#form.querySelector('input[name="' + input.name + '"]:checked')[0];
                    let value = radioEscogido.value ? radioEscogido.value : 1;

                    if (radioEscogido) {
                        formData.append(input.name, value);
                    }else if(conVacios){
                        formData.append(input.name, 0);
                    }
                }else{
                    let label = this.#form.querySelectorAll('[for="'+ input.id +'"]')[0];
                    let title = input.id;//label ? label.textContent : input.id;

                    if(input.value){
                        formData.append(title, input.value);
                    }else if(conVacios){
                        formData.append(title, null);
                    }
                }
            }
        }

        return formData;
    }

    validarFormExpert(campos = {}) {
        let valido = false;
        for (const i in campos) {
            let input = this.getId(campos[i]);

            valido = this.#validarCampoForm(input.id, false);
            if(!valido){
                valido = input.validationMessage;
                input.focus();
                input.select();
                break;
            }
        }

        return valido;
    }

    static validarCamposExpert(campos = {}) {
        let valido = false;
        for (const i in campos) {
            let input = document.getElementById(campos[i]);
            valido = ValidForm.validarCampo(input.id, false);
            if(!valido){
                valido = input.validationMessage;
                input.focus();
                input.select();
                break;
            }
        }

        return valido;
    }

    validarCampos(conMsg = true) {
        let inputs = this.#form.getElementsByTagName('INPUT');
        let valido = false;
        for (const i in inputs) {
            if(inputs[i].type != 'button' && inputs[i].type != 'submit' && inputs[i].type != 'reset'){
                valido = this.#validarCampoForm(inputs[i].id, conMsg);
                if(!valido){
                    break;
                }
            }
        }

        return valido;
    }

    #validarInput(input) {
        const validityState = input.validity;
        let value = input.value;
        let valido = true;

        switch (input.type) {
            case 'email':
                if(!this.validarCampoCorreo(value)){
                    valido = false;
                    break;
                }

                if(!this.validarNumCaracteres(value, input.getAttribute('maxlength'), input.getAttribute('minlength'))){
                    valido = false;
                    break;
                }

                break;
            case 'url':
                if(!this.url.test(value)){
                    valido = false;
                    break;
                }

                if(!this.validarNumCaracteres(value, input.getAttribute('maxlength'), input.getAttribute('minlength'))){
                    valido = false;
                    break;
                }

                break;
            case 'password':
            case 'search':
            case 'tel':
            case 'text':
                if(!this.validarNumCaracteres(value, input.getAttribute('maxlength'), input.getAttribute('minlength'))){
                    valido = false;
                    break;
                }

                break;
            case 'range':
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

                break;
            case 'number':
                if(!this.validarMaxMin(value, input.getAttribute('max'), input.getAttribute('min'))){
                    valido = false;
                    break;
                }

                if (validityState.stepMismatch) {
                    valido = false;
                    break;
                }

                break;
            case 'file':
                let file;
                for (const i in input.files) {
                    file = input.files[i];
                    if(file.size > 0) {

                        let arrExten = file.name.split('.');
                        input.files[i].name = arrExten[0] + '.' + arrExten[(arrExten.length -1)]

                        let accept = input.getAttribute('accept');
                        if (accept && accept.toLowerCase().indexOf(arrExten[(arrExten.length -1)].toLowerCase()) < 0) {
                            valido = false;
                            break;
                        }else if (!this.formatoFile.test(arrExten[(arrExten.length -1)].toLowerCase())) {
                            valido = false;
                            break;
                        }
                    }
                }
                
                let arrExten = file.name.split('.');
                if(valido && /jpg|jpeg|png|gif/g.test(arrExten[(arrExten.length -1)].toLowerCase())){
                    const image = document.createElement('img');
                    //image.src = URL.createObjectURL(file);
                    input.parentNode.append(image);

                    let reader = new FileReader();
                    reader.readAsDataURL(file);
                    reader.onload = function(e) {
                        image.src = e.target.result;
                    }
                }

                break;
            case 'checkbox':
                if (!input.cheked) {
                    valido = false;
                    break;
                }
                break;
            case 'radio':
                if(input.name){
                    if (!this.#form2.querySelector('input[name="' + input.name + '"]:checked')) {
                        valido = false;
                        break;
                    }
                }else{
                    console.warn('el radio buton requerido no tiene un name asociado');
                    valido = false;
                    break;
                }
                
                break;
            case 'color':
                break;
            case 'hidden':
                break;
            case 'image':
                break;
            default:
                console.warn('tipo indefinido');
                break;
        }

        if (validityState.patternMismatch)
            valido = false;

        return valido;
    }

    #validarCampoForm(id, conMsg = true){
        let input = this.getId(id);
        let inputReal = this.#getId(id);

        inputReal.value = input.value;
        inputReal.cheked = input.cheked;
        inputReal.name = input.name;
        inputReal.files = input.files;

        console.log(id, input, inputReal);

        if (inputReal.required) {
            if(inputReal.value){
                let valido = this.#validarInput(inputReal);

                if(!valido){
                    if (conMsg) {
                        input.setCustomValidity(inputReal.validationMessage);
                        input.reportValidity();
                    }
                    input.focus();
                    input.select();

                    if (input.type == 'file') {
                        input.value = '';
                        input.files = [];
                    }
                }

                return valido;
            }else{
                if (conMsg) {
                    input.setCustomValidity(inputReal.validationMessage);
                    input.reportValidity();
                }
                
                input.focus();
                input.select();
                
                let label = this.#form.querySelectorAll('[for="'+ inputReal.id +'"]')[0];
                if (label) {
                    console.warn('no tiene value el campo '+ label);
                }else{
                    console.warn('no tiene value el campo requerido con id '+ inputReal.id);
                }
                
                return false;
            }
        }else{
            return true;
        }
    }

    static validarCampo(id, conMsg = true){
        let inputReal = document.getElementById(id);

        console.log(id, input, inputReal);

        if (inputReal.required) {
            if(inputReal.value){
                let valido = this.#validarInput(inputReal);

                if(!valido){
                    if (conMsg) {
                        inputReal.setCustomValidity(inputReal.validationMessage);
                        inputReal.reportValidity();
                    }

                    inputReal.focus();
                    inputReal.select();

                    if (inputReal.type == 'file') {
                        inputReal.value = '';
                        inputReal.files = [];
                    }
                }

                return valido;
            }else{
                if (conMsg) {
                    inputReal.setCustomValidity(inputReal.validationMessage);
                    inputReal.reportValidity();
                }

                inputReal.focus();
                inputReal.select();

                let label = this.#form.querySelectorAll('[for="'+ inputReal.id +'"]')[0];
                if (label) {
                    console.warn('no tiene value el campo '+ label);
                }else{
                    console.warn('no tiene value el campo requerido con id '+ inputReal.id);
                }
                return false;
            }
        }else{
            return true;
        }
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
}