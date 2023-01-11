window.onload = function (e) {
    //ojo del los campo password class pw
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

    let botonEye = document.getElementsByClassName('pw');
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

    for (const i of document.querySelectorAll('[type="alfaSpace"]')) {
        i.addEventListener('input', function (e){
            this.value = this.value.replace(/[^A-Za-zñÑ ]/g, '').replace(/\s+/g, ' ');
        });
    }

    for (const i of document.querySelectorAll('[type="alfaNoSpace"]')) {
        i.addEventListener('input', function (e){
            this.value = this.value.replace(/[^A-Za-zñÑ]/g, '');
        });
    }

    for (const i of document.querySelectorAll('[type="textNoSpace"]')) {
        i.addEventListener('input', function (e){
            this.value = this.value.replace(/[^0-9A-Za-zñÑ]/g, '');
        });
    }
    
    //alfanumericos mas un espacio al teclear
    for (const i of document.querySelectorAll('[type="textSpace"]')) {
        i.addEventListener('input', function (e){
            this.value = this.value.replace(/[^0-9A-Za-zñÑ ]/g, '').replace(/\s+/g, ' ');
        });
    }
    
    //solo numeros al teclear
    for (const i of document.querySelectorAll('[type="textNumber"]')) {
        i.addEventListener('input', function (e){
            this.value = this.value.replace(/[^0-9]/g, '');
        });
    }

    //solo numeros con punto decimal al teclear
    for (const i of document.querySelectorAll('[type="numberPoin"]')) {
        i.addEventListener('input', function (e){//keyup
            this.value = this.value.replace(/[^0-9]/g, '').replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.');
        });
    }

}