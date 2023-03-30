/**
 * 
 * @author    Edwin Velasquez Jimenez
 * @copyright lionTumbler
*/
class ValidForm {
    //response.sort((x, y) => x.Title.localeCompare(y.Title)); //organisa un objeto
    #form = null;
    #mascara = null;

    textFile = 'El formato requerido es $%%';
    textColor = 'Definir un color diferente a $%%';
    textSame = 'El campo no es igual a $%%';

    textTagPermitidos = 'textarea, select, input';

    textErrorInput = 'Input no existe';
    textErrorMascara = 'El formulario tiene un campo inyectado o no existe la máscara';
    textWarRadio = 'El radio botón requerido no tiene un atributo "name" asociado';
    textwarInput = 'El input no tiene id';
    textWarTipoIndefinido = 'Tipo indefinido';

    validaRadio = 'input[name="$%%"]:checked';
    type = '[type="$%%"]';

    #colorDefault = '#000000';
    
    #typeInput = {
        email: 'email',
        url: 'url',
        textarea: 'textarea',
        password: 'password',
        search: 'search',
        tel: 'tel',
        text: 'text',
        range: 'range',
        date: 'date',
        datetimeLocal: 'datetime-local',
        month: 'month',
        time: 'time',
        week: 'week',
        number: 'number',
        file: 'file',
        checkbox: 'checkbox',
        radio: 'radio',
        color: 'color',
        select: 'select-one',
        hidden: 'hidden',
        firma: 'signature'
    };

    #typeDenegados = {
        button: 'button',
        submit: 'submit',
        reset: 'reset',
        image: 'image'
    };

    #tagPermitidos = {
        input: 'INPUT',
        select: 'SELECT',
        textArea: 'TEXTAREA'
    };

    #eye = `<path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z"/>
                    <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z"/>`;

    #eyeSlash = `<path d="M13.359 11.238C15.06 9.72 16 8 16 8s-3-5.5-8-5.5a7.028 7.028 0 0 0-2.79.588l.77.771A5.944 5.944 0 0 1 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.134 13.134 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755-.165.165-.337.328-.517.486l.708.709z"/>
                    <path d="M11.297 9.176a3.5 3.5 0 0 0-4.474-4.474l.823.823a2.5 2.5 0 0 1 2.829 2.829l.822.822zm-2.943 1.299.822.822a3.5 3.5 0 0 1-4.474-4.474l.823.823a2.5 2.5 0 0 0 2.829 2.829z"/>
                    <path d="M3.35 5.47c-.18.16-.353.322-.518.487A13.134 13.134 0 0 0 1.172 8l.195.288c.335.48.83 1.12 1.465 1.755C4.121 11.332 5.881 12.5 8 12.5c.716 0 1.39-.133 2.02-.36l.77.772A7.029 7.029 0 0 1 8 13.5C3 13.5 0 8 0 8s.939-1.721 2.641-3.238l.708.709zm10.296 8.884-12-12 .708-.708 12 12-.708.708z"/>`;

    #alfa = /[^A-Za-zñÑ ]/g;
    #alfaNS = /[^A-Za-zñÑ]/g;
    #textNS = /[^0-9A-Za-zñÑ]/g;
    #text = /[^0-9A-Za-zñÑ ]/g;
    #textTilde = /[^0-9A-Za-zñÑÁáÉéÍíÓóÚú.,:; ]/g;
    #number = /[^0-9]/g;
    #numberP =/(\d)(?=(\d{3})+(?!\d))/g;
    #space = /\s+/g;
    #antiInyect = /<SCRIPT>|<\/SCRIPT>|<script>|<\/script>|<\/|<|>/g;

    constructor(elemt, espesificacion = {mostrarImagen: true}){

        if (espesificacion.eye)
            this.#eye = espesificacion.eye;
        
        if (espesificacion.eyeSlash)
            this.#eyeSlash = espesificacion.eyeSlash;

        if (espesificacion.alfa)
            this.#alfa = espesificacion.alfa;

        if (espesificacion.alfaNS)
            this.#alfaNS = espesificacion.alfaNS;

        if (espesificacion.textNS)
            this.#textNS = espesificacion.textNS;
        
        if (espesificacion.text)
            this.#text = espesificacion.text;

        if (espesificacion.textTilde)
            this.#textTilde = espesificacion.textTilde;

        if (espesificacion.number)
            this.#number = espesificacion.number;

        if (espesificacion.numberP)
            this.#numberP = espesificacion.numberP;

        if (espesificacion.space)
            this.#space = espesificacion.space;

        this.#form = document.getElementById(elemt);
        if (document[elemt])
            this.#form = document[elemt];
        else if (!document.getElementById(elemt)){
            return console.error('El formulario nombrado no existe');
        }

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
        .pw `+this.type.replace('$%%', 'password')+`{
            padding-right: `+ paddingRight +`;
        }
        .pw `+this.type.replace('$%%', 'text')+`{
            padding-right: `+ paddingRight +`;
        }
        .pw{
            position: relative;
        }
        input, select, textarea{
            width: 100%;
            box-sizing: border-box;
        }
        `;
        document.getElementsByTagName('head')[0].append(style);

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

            i.innerHTML = anteshtmlCadena + '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye eye" viewBox="0 0 16 16">'+ this.#eyeSlash +'</svg>';

            if (i.children[1]) {
                i.children[1].addEventListener('click', (e) => {
                    if(i.children[1].classList.contains('eye')){
                        i.children[0].type = 'text';
                        i.children[1].classList.add("eye-s");
                        i.children[1].classList.remove("eye");
                        i.children[1].innerHTML = this.#eye;
                    }else{
                        i.children[0].type = 'password';
                        i.children[1].classList.add("eye");
                        i.children[1].classList.remove("eye-s");
                        i.children[1].innerHTML = this.#eyeSlash;
                    }
                })
            }
        }

        for (const i of this.#form.querySelectorAll(this.textTagPermitidos)) {
            i.addEventListener('input', (e) => {
                if(this.#inputValido(i))
                    i.value = i.value.replace(this.#antiInyect, '');
            });

            i.addEventsListeners = function(events, func) {
                events = events.replace(' ', '');
                var event = events.split(',');
                for (const e in event) {
                    i.addEventListener(event[e], func, false);
                }
            }

            i.hide = function () {
                i.style.display = 'none';
            }

            i.show = function () {
                i.style.display = 'block';
            }
        }

        for (const i of this.#form.querySelectorAll('[alfaNS]')) {
            i.addEventListener('input', (e) => {
                i.value = i.value.replace(this.#alfaNS, '');
            });
        }

        for (const i of this.#form.querySelectorAll('[textNS]')) {
            i.addEventListener('input', (e) => {
                i.value = i.value.replace(this.#textNS, '');
            });
        }

        for (const i of this.#form.querySelectorAll('[number]')) {
            i.addEventListener('input', (e) => {
                i.value = i.value.replace(this.#number, '');
            });
        }

        for (const i of this.#form.querySelectorAll('[alfa]')) {
            i.addEventListener('input', (e) => {
                i.value = i.value.replace(this.#alfa, '').replace(this.#space, ' ');
            });
        }

        for (const i of this.#form.querySelectorAll('[text]')) {//[input="text"]
            i.addEventListener('input', (e) => {
                i.value = i.value.replace(this.#text, '').replace(this.#space, ' ');
            });
        }

        for (const i of this.#form.querySelectorAll('[textTilde]')) {
            i.addEventListener('input', (e) => {
                i.value = i.value.replace(this.#textTilde, '').replace(this.#space, ' ');
            });
        }

        for (const i of this.#form.querySelectorAll('[numberPoin]')) {
            i.addEventListener('input', (e) => {
                i.value = i.value.replace(this.#number, '').replace(this.#numberP, '$1.');
            });
        }

        for (const i of document.querySelectorAll('[noCopy]')) {
            this.#quitarEventCopy(i);
        }

        for (const i of document.querySelectorAll('[noPaste]')) {
            this.#quitarEventPaste(i);
        }

        for (const i of document.querySelectorAll('[noCut]')) {
            this.#quitarEventCut(i);
        }

        for (const i of document.querySelectorAll('[noDrag]')) {
            this.#quitarEventDrag(i);
        }

        for (const i of document.querySelectorAll('[protected]')) {
            this.#quitarEventDrag(i);
            this.#quitarEventCopy(i);
            this.#quitarEventPaste(i);
            this.#quitarEventCut(i);
        }

        for (const i of this.#form.querySelectorAll(this.type.replace('$%%', this.#typeInput.firma))) {
            new TypeFirma(i);
        }

        for (const i of this.#form.querySelectorAll(this.type.replace('$%%', this.#typeInput.color))) {
            if(i.getAttribute('different'))
                i.value = i.getAttribute('different');
        }

        if (espesificacion.mostrarImagen) {
            for (const i of this.#form.querySelectorAll(this.type.replace('$%%', this.#typeInput.file))) {
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

    bloqueoInspecionar() {
        let body = document.getElementsByTagName('body')[0];
        body.addEventListener('contextmenu', (e) => {
            e.preventDefault();
        });
        body.addEventListener('keydown', (e) => {
            if (e.key == 'F12' || (e.ctrlKey && e.shiftKey && e.key == 'I')) 
                e.preventDefault();
        });
        body.addEventListener('keyup', (e) => {
            if (e.key == 'F12' || (e.ctrlKey && e.shiftKey && e.key == 'I'))
                e.preventDefault();
        });
        body.addEventListener('keypress', (e) => {
            if (e.key == 'F12' || (e.ctrlKey && e.shiftKey && e.key == 'I')) 
                e.preventDefault();
        });
        this.bloqueoMsgConsole();
    }

    bloqueoMsgConsole() {
        console.log = () => {};
        console.warn = () => {};
        console.error = () => {};
        console.count = () => {};
        console.table = () => {};
        console.time = () => {};
        console.timeEnd = () => {};
        console.trace = () => {};
        console.info = () => {};
        console.debug = () => {};
        console.countReset = () => {};
        console.timeLog = () => {};
        console.group = () => {};
        console.groupEnd = () => {};
        console.groupCollapsed = () => {};
        console.clear = () => {};
    }

    getId(id) {
        return this.#form.querySelector('#'+ id);
    }

    limpiarForm() {
        for (let input of this.#form.querySelectorAll(this.textTagPermitidos)) {
            if(this.#inputValido(input))
                this.limpiarCampo(input);
        }
    }

    limpiarCampoId(id) {
        let input = this.getId(id);
        limpiarCampo(input);
    }

    limpiarCampo(input) {
        if(input.type == this.#typeInput.color){
            if(input.getAttribute('different'))
                input.value = input.getAttribute('different');
            else
                input.value = this.#colorDefault;
        }else if (input.type == this.#typeInput.file) {
            const img = input.parentNode.getElementsByTagName('IMG')[0];
            if(img)
                img.remove();

            input.value = '';
        }else if(input.type == this.#typeInput.checkbox || input.type == this.#typeInput.radio){
            input.checked = false;
        }else if(input.type == this.#typeInput.select){
            input.selectedIndex = 0;
        }else if(input.type == this.#typeInput.firma){
            input.limpiarFirma();
        }else {
            input.value = '';
        }
    }

    mostarOcultarMsg($this, mensaje, validacion = true, colorOK = '#ced4da', colorERROR = '#dc3545') {
        let msg = document.getElementById('msg_' +$this.id);
        if(!msg){
            let elementMsg = document.createElement('div')
            elementMsg.id = 'msg_' +$this.id;
            $this.parentNode.append(elementMsg);
            msg = elementMsg;
        }

        if(validacion){
            $this.style.borderColor = colorOK;
            $this.style.color = colorOK;
            msg.style.display = 'none';
        }else{
            $this.style.borderColor = colorERROR;
            $this.style.color = colorERROR;
            msg.textContent = mensaje;
            msg.style.display = 'block';
        }
    }

    crearObjetoJson(conVacios = false, cabeceras = {}) {
        let data = {};
        for (let input of this.#form.querySelectorAll(this.textTagPermitidos)) {
            if(this.#inputValido(input)){
                if(input.type == this.#typeInput.file && input.files.length > 0){
                    data['files'] = input.files;
                }else if(input.type == this.#typeInput.checkbox){
                    let value = (input.value && input.value != 'on') ? input.value : 0;
                    let title = input.id;

                    if(cabeceras[input.id])
                        title = cabeceras[input.id];

                    if (input.checked) {
                        value = value == 0 ? 1 : value;
                        data[title] = value;
                    }else{
                        data[title] = 0;
                    }
                }else if(input.type == this.#typeInput.radio){
                    let radioEscogido = this.#form.querySelector(this.validaRadio.replace('$%%', input.name));
                    let title = input.name;

                    if(cabeceras[input.id])
                        title = cabeceras[input.id];

                    if (radioEscogido) {
                        let value = (radioEscogido.value && radioEscogido.value != 'on') ? radioEscogido.value : 1;
                        data[title] = value;
                    }else if(conVacios){
                        data[title] = null;
                    }
                }else{
                    let title = input.id;
                    if(cabeceras[input.id])
                        title = cabeceras[input.id];

                    if(input.value)
                        data[title] = input.value;
                    else if(conVacios)
                        data[title] = null;
                }
            }
        }

        return data;
    }

    crearFormData(conVacios = false, cabeceras = {}) {
        let formData = new FormData();
        for (let input of this.#form.querySelectorAll(this.textTagPermitidos)) {
            if(this.#inputValido(input)){
                if(input.type == this.#typeInput.file && input.files.length > 0){
                    for (const i in input.files.length) {
                        formData.append(input.id + '[]', input.files[i]);
                    }
                }else if(input.type == this.#typeInput.checkbox){
                    let value = (input.value && input.value != 'on') ? input.value : 0;
                    let title = input.id;

                    if(cabeceras[input.id])
                        title = cabeceras[input.id];

                    if (input.checked) {
                        value = value == 0 ? 1 : value;
                        formData.append(title, value);
                    }else{
                        formData.append(title, 0);
                    }
                }else if(input.type == this.#typeInput.radio){
                    let radioEscogido = this.#form.querySelector(this.validaRadio.replace('$%%', input.name));
                    let title = input.name;
                    
                    if(cabeceras[input.id])
                        title = cabeceras[input.id];

                    if (radioEscogido){
                        let value = (radioEscogido.value && radioEscogido.value != 'on') ? radioEscogido.value : 1;
                        formData.append(title, value);
                    }else if(conVacios){
                        formData.append(title, null);
                    }
                }else{
                    let title = input.id;
                    if(cabeceras[input.id])
                        title = cabeceras[input.id];

                    if(input.value)
                        formData.append(title, input.value);
                    else if(conVacios)
                        formData.append(title, null);
                }
            }
        }

        return formData;
    }

    validarCamposExpert(campos = {}, conMsg = false) {
        let valido = false;
        for (const i in campos) {
            let input = this.getId(campos[i]);
            if(input){
                valido = this.#validarCampoForm(input);
                if (conMsg && !valido) {
                    input.reportValidity();
                    return input;
                }else if(!valido){
                    return input.validationMessage;
                }
            } else {
                return this.textwarInput;
            }
        }

        return valido;
    }

    validarCampos(conMsg = true) {
        let valido = false;
        for (let input of this.#form.querySelectorAll(this.textTagPermitidos)) {
            if(this.#inputValido(input)){
                if (input.id) {
                    valido = this.#validarCampoForm(input);
                    if (conMsg && !valido) {
                        if (input.type != this.#typeInput.radio && input.type != this.#typeInput.checkbox) {
                            mostarOcultarMsg(input, input.validationMessage, false, input.style.color);
                        } else {
                            input.reportValidity();
                        }
                        
                        return input;
                    }else if(!valido){
                        return input.validationMessage;
                    }else{
                        let alerta = document.getElementById('alertFor' + input.id);
                        if (alerta) 
                            alerta.remove();
                    }
                } else {
                    return this.textwarInput;
                }
            }
        }

        return valido;
    }

    #getId(id) {
        return this.#mascara.querySelector('#'+ id);
    }

    #inputValido(input){
        return input.type != this.#typeDenegados.button && input.type != this.#typeDenegados.submit && input.type != this.#typeDenegados.reset && input.type != this.#typeDenegados.image
    }

    #quitarEventDrag(input) {
        input.addEventsListeners('dragover, dragstart, drop, drag, dragend', function (e){
            e.preventDefault();
        });
    }

    #quitarEventCopy(input) {
        input.addEventListener('copy', function (e){
            e.preventDefault();
        });
    }

    #quitarEventPaste(input) {
        input.addEventListener('paste', function (e){
            e.preventDefault();
        });
    }

    #quitarEventCut(input) {
        input.addEventListener('cut', function (e){
            e.preventDefault();
        });
    }

    #validarInput(input) {
        const validityState = input.validity;
        let value = input.value;
        let valido = true;

        if(value){
            switch (input.type) {
                case this.#typeInput.email:
                    if(!ValidForm.validarCampoCorreo(value) || !ValidForm.validarNumCaracteres(value, input.getAttribute('maxlength'), input.getAttribute('minlength')))
                        valido = false;

                    break;
                case this.#typeInput.url:
                    if(!ValidForm.validarCampoUrl(value) || !ValidForm.validarNumCaracteres(value, input.getAttribute('maxlength'), input.getAttribute('minlength')))
                        valido = false;
    
                    break;
                case this.#typeInput.textarea:
                case this.#typeInput.password:
                case this.#typeInput.search:
                case this.#typeInput.tel:
                case this.#typeInput.text:
                    if (!ValidForm.validarNumCaracteres(value, input.getAttribute('maxlength'), input.getAttribute('minlength')))
                        valido = false;
    
                    break;
                case this.#typeInput.range:
                case this.#typeInput.date:
                case this.#typeInput.datetimeLocal:
                case this.#typeInput.month:
                case this.#typeInput.time:
                case this.#typeInput.week:
                    if (validityState.rangeOverflow || validityState.rangeUnderflow || validityState.stepMismatch)
                        valido = false;
    
                    break;
                case this.#typeInput.number:
                    if(!ValidForm.validarMaxMin(value, input.getAttribute('max'), input.getAttribute('min')) || validityState.stepMismatch)
                        valido = false;
    
                    break;
                case this.#typeInput.file:
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

                                input.setCustomValidity(this.textFile.replace('$%%', formato));
                                break;
                            }
                        }
                    }
    
                    break;
                case this.#typeInput.checkbox:
                    if (!input.checked) 
                        valido = false;
    
                    break;
                case this.#typeInput.radio:
                    if(input.name){
                        if (!input.parentNode.parentNode.querySelector(this.validaRadio.replace('$%%', input.name)))
                            valido = false;
                    }else{
                        console.warn(this.textWarRadio);
                        valido = false;
                    }
                    
                    break;
                case this.#typeInput.color:
                    let msg = '';
                    if (input.getAttribute('different') && (value == input.getAttribute('different'))) {
                        msg = this.textColor.replace('$%%', input.getAttribute('different'));
                        valido = false;
                    }else if(value == this.#colorDefault){
                        msg = this.textColor.replace('$%%', this.#colorDefault);
                        valido = false;
                    }
    
                    if (!valido)
                        input.setCustomValidity(msg);
    
                    break;
                case this.#typeInput.select:
                    break;
                case this.#typeInput.hidden:
                    break;
                case this.#typeInput.firma:
                    break;
                default:
                    console.warn(this.textWarTipoIndefinido);
                    break;
            }
    
            if (validityState.patternMismatch){
                input.setCustomValidity('');
                input.setCustomValidity(input.validationMessage +' '+ input.pattern);
                valido = false;
            }

            if(input.getAttribute('same')){
                let same = input.parentNode.parentNode.querySelector('#'+ input.getAttribute('same'));
                let valueSame = same.value;
                if (value != valueSame) {
                    valido = false;
                    const label = this.#mascara.querySelector('[for="'+ same.id +'"]');
                    let msg = this.textSame.replace('$%%', same.id);
                    if (label)
                        msg = this.textSame.replace('$%%', label.textContent);
    
                    input.setCustomValidity(msg);
                }
            }
        }else if (!value){
            valido = false;
            input.setCustomValidity('');
        }

        return valido;
    }

    #validarCampoForm(input){
        if(input){
            let inputReal = this.#getId(input.id);
            if(inputReal){
                inputReal.name = input.name;
                if (input.type != this.#typeInput.file)
                    inputReal.value = input.value;

                if (input.type == this.#typeInput.file)
                    inputReal.files = input.files;

                if (input.type == this.#typeInput.checkbox || input.type == this.#typeInput.radio)
                    inputReal.checked = input.checked;

                if (inputReal.required) {
                    let valido = this.#validarInput(inputReal);

                    input.setCustomValidity(inputReal.validationMessage);
                    if(!valido){
                        input.focus();
                        if (input.type != this.#typeInput.select)
                            input.select();
                    }else if(valido){
                        input.setCustomValidity('');
                    }

                    return valido;
                }else{
                    return true;
                }
            }else{
                console.warn(textErrorMascara);
                return false;
            }
        }else{
            console.warn(this.textErrorInput);
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
            valido = ValidForm.validarCampo(campos[i]);
            if(!valido)
                return document.getElementById(campos[i]);
        }
        return valido;
    }

    static validarCampo(id){
        let input = document.getElementById(id);
        if (input) {
            if (input.required) {
                let valido = this.#validarInput(input);
                if(!valido){
                    input.focus();
                    if (input.type != this.#typeInput.select)
                        input.select();
                }else if(valido){
                    input.setCustomValidity('');
                }
                return valido;
            }else{
                return true;
            }
        }else{
            console.warn(this.textErrorInput);
            return false;
        }
    }

    static addList(input, data) {
        if(input.tagName == this.#tagPermitidos.input) {
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
                    let option = new Option(data[i], data[i]);
                    console.log(data, i, data[i]);
                    list.append(option);
                }
            }else{
                let option = new Option(data, data);
                list.append(option);
            }
        } else {
            console.warn('No es un input');
        }
    }
}

class TypeFirma {
    #mousePos = { x: 0, y: 0 };
    #ultimaPosMouse;
    #dibujar = false;
    #imagenVacia = 'data:image/png;base64,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';

    #anchoFirma = 620;
    #altoFirma = 200;
    #coorYGuiaGris = 60;
    #coorYGuiaNegra = 140;
    #margenGuias = 10;

    input;
    #textFirma;
    #textFirma2;
    formatoImage = 'image/png';
    iconoBtnEliminar = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
        <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
        <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
    </svg>`;
    fontFirma = '24px "Tahoma"';
    margirText = 10;
    anchoPincel = 3;
    anchoGuias = 5;

    colorPincel = '#413a3a';
    colorGuiaS = '#f1f3f4';
    colorGuiaI = '#000';

    warFirma = 'Esta vacia la firma';
    msgCanvas = 'No tienes un buen navegador.';
    
    constructor(input) {
        this.input = input;
        this.input.setAttribute('hidden', true);
        this.#ultimaPosMouse = this.#mousePos;
        this.input.value = null;
        
        let label = document.querySelector('[for="'+ this.input.id +'"]');
        if (label) {
            label.style.cssText = 'display: block';
        }

        if (screen.width < this.#anchoFirma && screen.width > 320) {
            this.#anchoFirma = screen.width -5;
            this.#altoFirma = screen.width * 0.2258;
            this.#coorYGuiaGris = screen.width * 0.726;
            this.#coorYGuiaNegra = screen.width * 0.1532;
            this.#margenGuias = 10;
        }else if (screen.width <= 320) {
            this.#anchoFirma = 310;
            this.#altoFirma = 140;
            this.#coorYGuiaGris = 45;
            this.#coorYGuiaNegra = 95;
            this.#margenGuias = 5;
        }

        this.canvasP = document.createElement('canvas');
        this.canvasP.style.cssText = 'border: 2px dashed #CCCCCC; border-radius: 5px; cursor: crosshair; position: absolute;';
        this.canvasP.width = this.#anchoFirma;
        this.canvasP.height = this.#altoFirma;
        this.canvasP.textContent = this.msgCanvas;
        this.canvasP.id = this.input.id + 'Canvas';
        this.canvasP.setAttribute('tabindex', '0');

        this.fondo = document.createElement('canvas');
        this.fondo.width = this.#anchoFirma;
        this.fondo.height = this.#altoFirma;
        this.fondo.style.cssText = 'margin: 2px;';

        this.ctxP = this.canvasP.getContext("2d");
        this.ctx2 = this.fondo.getContext("2d");

        this.#crearLineaGuiaGris();
        this.#crearLineaGuiaNegra(this.ctx2);
    
        let button = document.createElement('button');
        button.style.cssText = 'display: block; margin-bottom: 5px; border-radius: 5px; padding: 5px 10px; color: #fff; background-color: #dc3545; border-color: #dc3545;';
        button.innerHTML = this.iconoBtnEliminar;
        button.id = 'limpiar' + this.input.id;

        this.input.parentNode.append(this.canvasP);
        this.input.parentNode.append(this.fondo);
        this.input.parentNode.append(button);

        this.canvasP.addEventListener("mousedown", (e) => {
            this.#empezarDibujo(e);
            this.#pintarTrazos();
        }, false);
    
        this.canvasP.addEventListener("mousemove", (e) => {
            this.#pintar(e);
        }, false);

        this.canvasP.addEventListener("mouseup", (e) => {
            this.#terminarDibujo();
        }, false);

        this.canvasP.addEventListener("mouseleave", (e) => {
            this.#terminarDibujo();
        }, false);

        this.canvasP.addEventListener("touchstart", (e) => {
            if (e.cancelable) 
                e.preventDefault();

            this.#empezarDibujo(e);
        }, false);
    
        this.canvasP.addEventListener("touchmove", (e) => {
            this.#pintar(e);
        }, false);
    
        this.canvasP.addEventListener("touchend", (e) => {
            this.#terminarDibujo();
        }, false);
    
        this.canvasP.addEventListener("touchleave", (e) => {
            this.#terminarDibujo();
        }, false);

        button.addEventListener("click", (e) => {
            this.#limpiarFirma();
        }, false);

        this.input.addtexts = (text = null, text2 = null) => {
            this.#textFirma = text;
            this.#textFirma2 = text2;
        };

        this.input.descargarImagenFirma = (nombreArchivo = 'Firma' + this.input.id) => {
            let enlace = document.createElement('a');
            enlace.download = nombreArchivo + '.png';
            enlace.href = this.canvasP.toDataURL(this.formatoImage, 1);
            enlace.click();
        };

        this.input.descargarSvgFirma = (nombreArchivo = 'Firma' + this.input.id) => {
            //TODO: seguir mejorando
            let svgimg = document.createElementNS('http://www.w3.org/2000/svg', 'image');
            svgimg.setAttribute( 'width', this.canvasP.width );
            svgimg.setAttribute( 'height', this.canvasP.height );
            svgimg.setAttributeNS("http://www.w3.org/1999/xlink", 'xlink:href', this.canvasP.toDataURL(this.formatoImage, 1));
            console.log(svgimg);
        };

        this.input.focus = () => {
            this.canvasP.focus();
        };

        this.input.limpiarFirma = () => {
            this.#limpiarFirma();
        };
    }

    #pintar(e){
        this.#mousePos = this.#getPosicionPuntero(e);
        this.#pintarTrazos();
    }

    #empezarDibujo(e){
        this.#dibujar = true;
        this.#ultimaPosMouse = this.#getPosicionPuntero(e);
    }

    #terminarDibujo() {
        if (this.#dibujar)
            this.input.value = this.#obtenerFirma();

        this.#dibujar = false;
        this.#pintarTrazos();
    }

    #pintarTrazos() {
        if (this.#dibujar) {
            this.ctxP.beginPath();
            this.ctxP.strokeStyle = this.colorPincel;
            this.ctxP.lineWidth = this.anchoPincel;
            this.ctxP.lineCap = "round";
            this.ctxP.moveTo(this.#ultimaPosMouse.x, this.#ultimaPosMouse.y);
            this.ctxP.lineTo(this.#mousePos.x, this.#mousePos.y);
            this.ctxP.stroke();
            this.ctxP.closePath();
            this.#ultimaPosMouse = this.#mousePos;
        }
    }

    #getPosicionPuntero(event) {
        let rect = this.canvasP.getBoundingClientRect();
        if (event.clientX) {
            return {
                x: event.clientX - rect.left,
                y: event.clientY - rect.top
            };
        }else if (event.touches[0].clientX) {
            return {
                x: event.touches[0].clientX - rect.left,
                y: event.touches[0].clientY - rect.top
            };
        }
    }

    #firmaValida() {
        let dataUrl = this.canvasP.toDataURL();
        if (this.#imagenVacia == dataUrl)
            return false;
        return true;
    }

    #limpiarFirma() {
        this.canvasP.width = this.canvasP.width;
        this.input.value = null;
    }

    #pintarText(text, titleY) {
        this.ctxP.font = this.fontFirma;
        this.ctxP.fillText('  ' + text, this.margirText, titleY);
        this.ctxP.stroke();
    }

    #obtenerFirma() {
        if (this.#firmaValida()) {
            this.#crearLineaGuiaNegra(this.ctxP);

            let titleY = 167;
            if (this.#textFirma) 
                this.#pintarText(this.#textFirma, titleY)

            titleY += 21;
            if (this.#textFirma2) 
                this.#pintarText(this.#textFirma2, titleY)

            return this.canvasP.toDataURL(this.formatoImage, 1);
        } else {
            console.warn(this.warFirma);
            return null;
        }
    }

    #crearLineaGuiaGris() {
        this.ctx2.beginPath();
        this.ctx2.strokeStyle = this.colorGuiaS;
        this.ctx2.lineWidth = this.anchoGuias;
        this.ctx2.setLineDash([10, 5]);//linea discontinua
        this.ctx2.moveTo(this.#margenGuias, this.#coorYGuiaGris);
        this.ctx2.lineTo(this.#anchoFirma -this.#margenGuias, this.#coorYGuiaGris);
        this.ctx2.stroke();
        this.ctx2.closePath();
    }

    #crearLineaGuiaNegra(contexto) {
        contexto.beginPath();
        contexto.strokeStyle = this.colorGuiaI;
        contexto.lineWidth = this.anchoGuias;
        contexto.setLineDash([]);
        contexto.moveTo(this.#margenGuias, this.#coorYGuiaNegra);
        contexto.lineTo(this.#anchoFirma -this.#margenGuias, this.#coorYGuiaNegra);
        contexto.stroke();
        contexto.closePath();
    };
}

export {ValidForm};