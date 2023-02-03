/**
 * 
 * @author    Edwin Velasquez Jimenez
 * @copyright lionTumbler
*/
class ValidForm {
    //response.sort((x, y) => x.Title.localeCompare(y.Title)); //organisa un objeto
    #form = null;
    #mascara = null;

    static #alfa = /[^A-Za-zñÑ ]/g;
    static #alfaNS = /[^A-Za-zñÑ]/g;
    static #textNS = /[^0-9A-Za-zñÑ]/g;
    static #text = /[^0-9A-Za-zñÑ ]/g;
    static #textTilde = /[^0-9A-Za-zñÑÁáÉéÍíÓóÚú ]/g;
    static #number = /[^0-9]/g;
    static #numberP =/(\d)(?=(\d{3})+(?!\d))/g;
    static #space = /\s+/g;

    constructor(elemt, mostrarImagen = true){
        this.#form = document.getElementById(elemt);
        if (document[elemt])
            this.#form = document[elemt];
        else if (!document.getElementById(elemt))
            console.error('El formulario nombrado no existe');

        this.#mascara = this.#form.cloneNode(true);

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

        const eye = `<path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z"/>
                    <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z"/>`;

        let botonEye = this.#form.getElementsByClassName('pw');
        for (const i of botonEye) {
            let anteshtml;
            let anteshtmlCadena = '';

            if (i.children[0]) {
                anteshtml = i.children[0];
                anteshtmlCadena = anteshtml.outerHTML;
            }else{
                anteshtmlCadena = '<input type="password" id="pw'+ i +'">';
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

        for (const i of this.#form.querySelectorAll('[input="textTilde"]')) {
            i.addEventListener('input', function (e){
                this.value = this.value.replace(ValidForm.#textTilde, '').replace(ValidForm.#space, ' ');
            });
        }

        for (const i of this.#form.querySelectorAll('[input="numberPoin"]')) {
            i.addEventListener('input', function (e){
                this.value = this.value.replace(ValidForm.#number, '').replace(ValidForm.#numberP, '$1.');
            });
        }

        for (const i of this.#form.querySelectorAll('[type="color"]')) {
            if(i.getAttribute('different'))
                i.value = i.getAttribute('different');
        }

        if (mostrarImagen) {
            for (const i of this.#form.querySelectorAll('[type="file"]')) {
                i.addEventListener('change', function (e){
                    if (this.value) {
                        let file = this.files[(this.files.length -1)];
                        const arrExten = file.name.split('.');
                        if(/jpg|jpeg|png|gif/g.test(arrExten[(arrExten.length -1)].toLowerCase())){
                            const image = document.createElement('img');
                            this.parentNode.append(image);

                            let reader = new FileReader();
                            reader.readAsDataURL(file);
                            reader.onload = function(e) {
                                image.src = e.target.result;
                            }
                        }
                    }else{
                        const img = this.parentNode.getElementsByTagName('IMG')[0];
                        if(img)
                            img.remove();
                    }
                });
            }
        }
    }

    getId(id) {
        return this.#form.querySelectorAll('[id="'+id+'"]')[0];
    }

    limpiarForm() {
        let inputs = this.#form.getElementsByTagName('INPUT');
        for (let i = 0; i < inputs.length; i++) {
            let input = inputs[i];
            if(input.type != 'button' && input.type != 'submit' && input.type != 'reset' && input.type != 'image'){
                this.limpiarCampo(input);
            }
        }

        let selects = this.#form.getElementsByTagName('SELECT');
        for (let i = 0; i < selects.length; i++) {
            let select = selects[i];
            this.limpiarCampo(select);
        }

        let textAreas = this.#form.getElementsByTagName('TEXTAREA');
        for (let i = 0; i < textAreas.length; i++) {
            let textArea = textAreas[i];
            this.limpiarCampo(textArea);
        }
    }

    limpiarCampoId(id) {
        let input = this.getId(id);
        limpiarCampo(input);
    }

    limpiarCampo(input) {
        if(input.type == 'color'){
            if(input.getAttribute('different'))
                input.value = input.getAttribute('different');
            else
                input.value = '#000000';
        }else if (input.type == 'file') {
            const img = input.parentNode.getElementsByTagName('IMG')[0];
            if(img)
                img.remove();

            input.value = '';
        }else if(input.type == 'checkbox' || input.type == 'radio'){
            input.checked = false;
        }else if(input.type == 'select-one'){
            input.selectedIndex = 0;
        }else {
            input.value = '';
        }
    }

    crearObjetoJson(conVacios = false, cabeceras = []) {
        let data = {};
        let inputs = this.#form.getElementsByTagName('INPUT');
        let f = 0;

        for (let i = 0; i < inputs.length; i++) {
            let input = inputs[i];
            if(input.type != 'button' && input.type != 'submit' && input.type != 'reset' && input.type != 'image'){
                if(input.type == 'file' && input.files.length > 0){
                    data['files'] = input.files;
                }else if(input.type == 'checkbox'){
                    let value = (input.value && input.value != 'on') ? input.value : 0;
                    let title = input.id;

                    if(cabeceras[f])
                        title = cabeceras[f];

                    if (input.checked) {
                        value = value == 0 ? 1 : value;
                        data[title] = value;
                    }else{
                        data[title] = 0;
                    }
                }else if(input.type == 'radio'){
                    let radioEscogido = this.#form.querySelector('input[name="' + input.name + '"]:checked');
                    let title = input.name;

                    if(cabeceras[f])
                        title = cabeceras[f];

                    if (radioEscogido) {
                        let value = (radioEscogido.value && radioEscogido.value != 'on') ? radioEscogido.value : 1;
                        data[title] = value;
                    }else if(conVacios){
                        data[title] = null;
                    }
                }else{
                    let title = input.id;
                    if(cabeceras[f])
                        title = cabeceras[f];

                    if(input.value)
                        data[title] = input.value;
                    else if(conVacios)
                        data[title] = null;
                }

                f++;
            }
        }

        let selects = this.#form.getElementsByTagName('SELECT');
        for (let i = 0; i < selects.length; i++) {
            let select = selects[i];

            let title = select.id;
            if(cabeceras[f])
                title = cabeceras[f];

            if(select.value)
                data[title] = select.value;
            else if(conVacios)
                data[title] = null;
            
            f++;
        }

        let textAreas = this.#form.getElementsByTagName('TEXTAREA');
        for (let i = 0; i < textAreas.length; i++) {
            let textArea = textAreas[i];

            let title = textArea.id;
            if(cabeceras[f])
                title = cabeceras[f];

            if(textArea.value)
                data[title] = textArea.value;
            else if(conVacios)
                data[title] = null;
            
            f++;
        }

        return data;
    }

    crearFormData(conVacios = false, cabeceras = []) {
        let formData = new FormData();
        let inputs = this.#form.getElementsByTagName('INPUT');
        let f = 0;

        for (let i = 0; i < inputs.length; i++) {
            let input = inputs[i];
            if(input.type != 'button' && input.type != 'submit' && input.type != 'reset' && input.type != 'image'){
                if(input.type == 'file' && input.files.length > 0){
                    for (const i in input.files.length) {
                        formData.append(input.id + '[]', input.files[i]);
                    }
                }else if(input.type == 'checkbox'){
                    let value = (input.value && input.value != 'on') ? input.value : 0;
                    let title = input.id;

                    if(cabeceras[f])
                        title = cabeceras[f];

                    if (input.checked) {
                        value = value == 0 ? 1 : value;
                        formData.append(title, value);
                    }else{
                        formData.append(title, 0);
                    }
                }else if(input.type == 'radio'){
                    let radioEscogido = this.#form.querySelector('input[name="' + input.name + '"]:checked');
                    let title = input.name;
                    
                    if(cabeceras[f])
                        title = cabeceras[f];

                    if (radioEscogido){
                        let value = (radioEscogido.value && radioEscogido.value != 'on') ? radioEscogido.value : 1;
                        formData.append(title, value);
                    }else if(conVacios){
                        formData.append(title, null);
                    }
                }else{
                    let title = input.id;
                    if(cabeceras[f])
                        title = cabeceras[f];

                    if(input.value)
                        formData.append(title, input.value);
                    else if(conVacios)
                        formData.append(title, null);
                }

                f++;
            }
        }

        let selects = this.#form.getElementsByTagName('SELECT');
        for (let i = 0; i < selects.length; i++) {
            let select = selects[i];

            let title = select.id;
            if(cabeceras[f])
                title = cabeceras[f];

            if(select.value)
                formData.append(title, select.value);
            else if(conVacios)
                formData.append(title, null);
            
            f++;
        }

        let textAreas = this.#form.getElementsByTagName('TEXTAREA');
        for (let i = 0; i < textAreas.length; i++) {
            let textArea = textAreas[i];

            let title = textArea.id;
            if(cabeceras[f])
                title = cabeceras[f];

            if(textArea.value)
                formData.append(title, textArea.value);
            else if(conVacios)
                formData.append(title, null);
            
            f++;
        }

        return formData;
    }

    validarCamposExpert(campos = {}, conMsg = false) {
        let valido = false;
        for (const i in campos) {
            valido = this.#validarCampoForm(input, conMsg);
            if(!valido)
                return this.getId(campos[i]);
        }

        return valido;
    }

    validarCampos(conMsg = true) {
        let inputs = this.#form.getElementsByTagName('INPUT');
        let valido = false;
        for (let i = 0; i < inputs.length; i++) {
            let input = inputs[i];
            if(input.type != 'button' && input.type != 'submit' && input.type != 'reset' && input.type != 'image'){
                valido = this.#validarCampoForm(input, conMsg);
                if(!valido)
                    return input;
            }
        }

        if (valido) {
            let selects = this.#form.getElementsByTagName('SELECT');
            for (let i = 0; i < selects.length; i++) {
                let select = selects[i];
                valido = this.#validarCampoForm(select, conMsg);
                if(!valido)
                    return select;
            }
        }

        if (valido) {
            let textAreas = this.#form.getElementsByTagName('TEXTAREA');
            for (let i = 0; i < textAreas.length; i++) {
                let textArea = textAreas[i];
                valido = this.#validarCampoForm(textArea, conMsg);
                if(!valido)
                    return textArea;
            }
        }

        return valido;
    }

    #getId(id) {
        return this.#mascara.querySelectorAll('[id="'+id+'"]')[0];
    }

    #validarInput(input) {
        const validityState = input.validity;
        let value = input.value;
        let valido = true;

        if(value){
            switch (input.type) {
                case 'email':
                    if(!ValidForm.validarCampoCorreo(value) || !ValidForm.validarNumCaracteres(value, input.getAttribute('maxlength'), input.getAttribute('minlength'))){
                        valido = false;
                    }

                    break;
                case 'url':
                    if(!ValidForm.validarCampoUrl(value) || !ValidForm.validarNumCaracteres(value, input.getAttribute('maxlength'), input.getAttribute('minlength'))){
                        valido = false;
                    }
    
                    break;
                case 'textarea':
                case 'password':
                case 'search':
                case 'tel':
                case 'text':
                    if (!ValidForm.validarNumCaracteres(value, input.getAttribute('maxlength'), input.getAttribute('minlength'))) {
                        valido = false;
                    }
    
                    break;
                case 'range':
                case 'date':
                case 'datetime-local':
                case 'month':
                case 'time':
                case 'week':
                    if (validityState.rangeOverflow || validityState.rangeUnderflow || validityState.stepMismatch) {
                        valido = false;
                    }
    
                    break;
                case 'number':
                    if(!ValidForm.validarMaxMin(value, input.getAttribute('max'), input.getAttribute('min')) || validityState.stepMismatch){
                        valido = false;
                    }
    
                    break;
                case 'file':
                    let file;
                    for (const i in input.files) {
                        file = input.files[i];
                        if(file.size > 0) {
    
                            const arrExten = file.name.split('.');
                            const accept = input.getAttribute('accept');
                            if ((accept && accept.toLowerCase().indexOf(arrExten[(arrExten.length -1)].toLowerCase()) < 0) || (!accept && !ValidForm.validarCampoFile(arrExten[(arrExten.length -1)].toLowerCase()))) {
                                valido = false;
                                let formato = 'jpg | jpeg | png | gif';
                                if (accept) 
                                    formato = accept;

                                input.setCustomValidity('El formato requerido es ' + formato);
                                break;
                            }
                        }
                    }
    
                    break;
                case 'checkbox':
                    if (!input.checked) {
                        valido = false;
                    }
    
                    break;
                case 'radio':
                    if(input.name){
                        if (!input.parentNode.parentNode.querySelector('input[name="' + input.name + '"]:checked'))
                            valido = false;
                    }else{
                        console.warn('El radio botón requerido no tiene un atributo "name" asociado');
                        valido = false;
                    }
                    
                    break;
                case 'color':
                    let msg = '';
                    if (input.getAttribute('different') && (value == input.getAttribute('different'))) {
                        msg = 'Definir un color diferente a ' + input.getAttribute('different');
                        valido = false;
                    }else if(value == '#000000'){
                        msg = 'Definir un color diferente';
                        valido = false;
                    }
    
                    if (!valido) {
                        input.setCustomValidity(msg);
                    }
    
                    break;
                case 'select-one':
                    break;
                case 'hidden':
                    break;
                default:
                    console.warn('Tipo indefinido');
                    break;
            }
    
            if (validityState.patternMismatch){
                input.setCustomValidity(input.validationMessage +' '+ input.pattern);
                valido = false;
            }

            if(input.getAttribute('same')){
                let same = input.parentNode.parentNode.querySelector('#'+ input.getAttribute('same'));
                let valueSame = same.value;
                if (value != valueSame) {
                    valido = false;
                    const label = this.#mascara.querySelectorAll('[for="'+ same.id +'"]')[0];
                    let msg = 'El campo no es igual a '+ same.id;
                    if (label)
                        msg = 'El campo no es igual a '+ label.textContent;
    
                    input.setCustomValidity(msg);
                }
            }

        }else if (!value){
            valido = false;
            input.setCustomValidity('');
        }

        return valido;
    }

    #validarCampoForm(input, conMsg = true){
        if(input){
            let inputReal = this.#getId(input.id);

            if (input.type != 'file') 
                inputReal.value = input.value;

            inputReal.checked = input.checked;
            inputReal.name = input.name;
            inputReal.files = input.files;

            if (inputReal.required) {
                let valido = this.#validarInput(inputReal);

                input.setCustomValidity(inputReal.validationMessage);
                if(!valido){
                    if (conMsg) {
                        input.reportValidity();
                        inputReal.setCustomValidity('');
                    }

                    input.focus();
                    if (input.type != 'select-one')
                        input.select();
                }

                return valido;
            }else{
                return true;
            }
        }else{
            console.warn('Input no existe');
            return false;
        }
    }

    static validarCampoFile(value, regex = /jpg|jpeg|png|gif/g) {
        return regex.test(value);
    }

    static validarCampoUrl(value, regex = /https:\/\/.{1,200}|http:\/\/.{1,200}/g) {
        return regex.test(value);
    }

    static validarCampoCorreo(value, regex = /(^(([a-zA-Z0-9]{1,15}([\_\-\.]{0,1}[a-zA-Z0-9]{1,15}[\_\-\.]{0,1}){0,15}[a-zA-Z0-9]{1,15}){1,3}|[a-zA-Z0-9]{1,50})[@]{1,1}(([a-zA-Z0-9]{1,15}([\_\-\.]{0,1}[a-zA-Z0-9]{1,15}[\_\-\.]{0,1}){0,15}[a-zA-Z0-9]{1,15}){1,3}|[a-zA-Z0-9]{1,50})\.[a-zA-Z]{2,5}){1,1}$/g) {
        return regex.test(value);
    }

    static validarNumCaracteres(value, maxlength, minlength) {
        let valido = true;

        if (maxlength && value.length > maxlength)
            valido = false;

        if (minlength && value.length < minlength)
            valido = false;

        return valido;
    }

    static validarMaxMin(value, max, min) {
        let valido = true;

        if(min && isNaN(min))
            valido = false;

        if(max && isNaN(max))
            valido = false;

        if (max && value > max)
            valido = false;

        if (min && value < min)
            valido = false;

        return valido;
    }

    static validarCamposExpert(campos = {}) {
        let valido = false;
        for (const i in campos) {
            valido = ValidForm.validarCampo(campos[i], false);
            if(!valido)
                return document.getElementById(campos[i]);
        }

        return valido;
    }

    static validarCampo(id, conMsg = true){
        let inputReal = document.getElementById(id);
        if (inputReal) {
            if (inputReal.required) {
                function mostrar() {
                    inputReal.setCustomValidity(inputReal.validationMessage);
                    if (conMsg) {
                        inputReal.reportValidity();
                        inputReal.setCustomValidity('');
                    }

                    inputReal.focus();
                    if (inputReal.type != 'select-one')
                        inputReal.select();
                }

                if(inputReal.value){
                    let valido = this.#validarInput(inputReal);

                    if(!valido){
                        mostrar();

                        if (inputReal.type == 'file') {
                            inputReal.value = '';
                            inputReal.files = [];
                        }
                    }

                    return valido;
                }else{
                    mostrar();

                    return false;
                }
            }else{
                return true;
            }
        }else{
            return false;
        }
    }

    static addList(input, data) {
        if(input.tagName == 'INPUT') {
            if (!input.getAttribute('list'))
                input.setAttribute('list', input.id +'List');

            let list = document.getElementById(input.id +'List');
            if(!list){
                list = document.createElement('datalist');
                list.id = input.id +'List';
                input.parentNode.append(list);
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
            console.warn('No es un input');
        }
    }
}

export {ValidForm};