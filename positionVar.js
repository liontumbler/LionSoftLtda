var position = {
    canvas: null,
    crearPosicion: function (e, click) {
        if (e.clientX) {
            let arrAux = [];
            let obj = {
                x: e.clientX,
                y: e.clientY,
                scrollX: window.scrollX,
                scrollY: window.scrollY,
                pg: location.href,
                cantidad: 1,
                click: click
            };
            if (localStorage.posicionClick) {
                arrAux = JSON.parse(localStorage.posicionClick);
                let organizado = arrAux.find(function (mouse) {
                    return mouse.x == obj.x && mouse.y == obj.y && mouse.scrollX == obj.scrollX && mouse.scrollY == obj.scrollY;
                });
                if (organizado) {
                    organizado.cantidad += 1;
                }else{
                    arrAux.push(obj);
                }
            }else{
                arrAux.push(obj);
            }
            arrAux.sort((x, y) => x.cantidad - y.cantidad);
            localStorage.posicionClick = JSON.stringify(arrAux);
        }else if (e.touches) {
            let arrAux = [];
            if(e.touches[0].clientX){
                let obj = {
                    x: e.touches[0].clientX,
                    y: e.touches[0].clientY,
                    scrollX: window.scrollX,
                    scrollY: window.scrollY,
                    pg: location.href,
                    cantidad: 1,
                    click: click
                };
                if (localStorage.posicionClick) {
                    arrAux = JSON.parse(localStorage.posicionClick);
                    let organizado = arrAux.find(function (mouse) {
                        return mouse.x == obj.x && mouse.y == obj.y && mouse.scrollX == obj.scrollX && mouse.scrollY == obj.scrollY;
                    });
                    if (organizado) {
                        organizado.cantidad += 1;
                    }else{
                        arrAux.push(obj);
                    }
                }else{
                    arrAux.push(obj);
                }
                arrAux.sort((x, y) => x.cantidad - y.cantidad);
                localStorage.posicionClick = JSON.stringify(arrAux);
            }
        }
    },
    iniciarRastreoClI: function()  {
        document.getElementsByTagName('body')[0].addEventListener('click', (e) => {
            position.crearPosicion(e, 'I');
        });
        document.getElementsByTagName('body')[0].addEventListener('contextmenu', (e) => {
            position.crearPosicion(e, 'D');
        });
    },
    crearCanvas: () => {
        let body = document.getElementsByTagName('body')[0];
        let div = document.createElement('div');
        div.style.color = "#fff";
        div.style.backgroundColor = "#b5bdf3";
        div.style.border = "1px solid #1f59ff";
        div.style.borderRadius = "0px 5px 5px 5px";
        div.style.display = 'none';
        div.style.position = 'fixed';
        div.style.padding = '5px 12px';
        div.style.zIndex = 2;
        div.style.pointerEvents = 'none';
        div.style.textAlign = 'center';
        body.append(div);
        let div2 = document.createElement('div');
        div2.style.backgroundColor = "#fff";
        div2.style.borderRadius = "5px 5px 5px 5px";
        div2.style.position = 'fixed';
        div2.style.padding = '5px 12px';
        div2.style.zIndex = 2;
        div2.style.pointerEvents = 'none';
        div2.style.top = 0;
        div2.style.right = 0;
        body.append(div2);
        if (localStorage.posicionClick) {
            let arrAux = JSON.parse(localStorage.posicionClick);
            div2.innerHTML = 'el que + tiene clicks: ' + arrAux[arrAux.length -1].cantidad + '<br>' + 'el que - tiene clicks: ' + arrAux[0].cantidad;
            if (this.canvas) {
                this.canvas.width = this.canvas.width
            }else{
                this.canvas = document.createElement('canvas')
                canvas.width = body.clientWidth;
                canvas.height = body.clientHeight;
                canvas.style.cssText = 'position: absolute; top: 0px; left: 0px; z-index: 1;';//-1;
                canvas.textContent = 'no resiste canvas';
                body.append(canvas);
            }
        }else{
            console.log('no hay nada en el arreglo de clicks');
            return;
        }
        this.canvas.addEventListener("mousemove", (e) => {
            if (localStorage.posicionClick) {
                let arrAux = JSON.parse(localStorage.posicionClick);
                let maxPos = arrAux[arrAux.length -1].cantidad;
                let max = 10;
                for (const i in arrAux) {
                    let mouse = arrAux[i];
                    let formula = (mouse.cantidad * max) / maxPos;
                    let radio = (5 * formula)
                    let dx = Math.abs((e.clientX + window.scrollX) - (mouse.x + mouse.scrollX))
                    let dy = Math.abs((e.clientY + window.scrollY) - (mouse.y + mouse.scrollY))
                    let distancia = Math.sqrt((Math.pow(dx, 2) + Math.pow(dy, 2)));
                    if(distancia <= radio){
                        let cajaX = e.clientX + 142;
                        let cajaY = e.clientY + 83;
                        if(cajaX > screen.width){
                            div.style.left = (Math.abs((e.clientX - 142))) + "px";
                        }else{
                            div.style.left = ((e.clientX)) + "px";
                        }
                        if(cajaY > window.innerHeight){
                            div.style.top = ((e.clientY - 83)) + "px";
                        }else{
                            div.style.top = ((e.clientY)) + "px";
                        }
                        div.innerHTML = ('Cantidad Click: ' + mouse.cantidad + '<br>' + 'x: ' + (mouse.x + mouse.scrollX) + ', y: ' + (mouse.y + mouse.scrollY) + '<br>' + 'Click: ' + (mouse.click == 'D' ? 'Derecho' : 'Izquierdo'))
                        div.style.display = 'block';
                        this.canvas.style.cursor = "pointer";
                        break;
                    } else{
                        div.style.display = 'none';
                        this.canvas.style.cursor = '';
                    }
                }
            }
        }, false);
    },
    eliminarCanvas: () => {
        this.canvas.remove();
    },
    hacerClickPocision: function(x, y){
        let elemet = document.elementFromPoint(x, y);
        if(elemet.click){
            elemet.click();
            return 'hizo click';
        }else{
            return elemet;
        }
    },
    sumarArrPosicion: function (arr1, arr2) {//position.sumarArrPosicion(JSON.parse(localStorage.uno), JSON.parse(localStorage.dos))
        let arrAux = [];
        const arr3 = arr1.concat(arr2);
        for (const i in arr3) {
            let pos1 = arr3.filter(obj => {
                return obj.pg == location.href && obj.x == arr3[i].x && obj.y == arr3[i].y && obj.scrollX == arr3[i].scrollX && obj.scrollY == arr3[i].scrollY;
            });
            let localiza = arrAux.find(function (mouse) {
                return mouse.x == arr3[i].x && mouse.y == arr3[i].y && mouse.scrollX == arr3[i].scrollX && mouse.scrollY == arr3[i].scrollY;
            });
            if(!localiza){
                let obj = {
                    x: '',
                    y: '',
                    scrollX: '',
                    scrollY: '',
                    pg: '',
                    cantidad: 0,
                    click: ''
                };
                for (const i in pos1) {
                    if (obj.x == '') 
                        obj.x = pos1[i].x;
                    if (obj.y == '') 
                        obj.y = pos1[i].y;
                    if (obj.scrollX == '') 
                        obj.scrollX = pos1[i].scrollX;
                    if (obj.scrollY == '') 
                        obj.scrollY = pos1[i].scrollY;
                    if (obj.pg == '') 
                        obj.pg = pos1[i].pg;
                    if (obj.click == '') 
                        obj.click = pos1[i].click;
                    obj.cantidad += pos1[i].cantidad;
                }
                arrAux.push(obj);
            }
        }
        arrAux.sort((x, y) => x.cantidad - y.cantidad);
        localStorage.posicionClick = JSON.stringify(arrAux);
    },
    dibujarCruz: (x, y, ancho = 25) => {
        let ctx = this.canvas.getContext("2d");
        ctx.beginPath();
        ctx.strokeStyle = '#000';
        ctx.moveTo(x, (y - ancho));
        ctx.lineTo(x, ((y - ancho) + (ancho *2)));
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo((x - ancho), y);
        ctx.lineTo(((x - ancho) + (ancho *2)), y);
        ctx.stroke();
    },
    pintarPuntos: () => {
        if (localStorage.posicionClick) {
            position.crearCanvas();
            let arrAux = JSON.parse(localStorage.posicionClick);
            let pos = arrAux.filter(obj => obj.pg == location.href);
            if(pos.length > 0){
                let maxPos = pos[pos.length -1].cantidad;
                let max = 10;
                for (const i in pos.reverse()) {
                    let x = (pos[i].x + pos[i].scrollX);
                    let y = (pos[i].y + pos[i].scrollY);
                    let formula = (pos[i].cantidad * max) / maxPos;
                    let numColor = ( 10 * Math.round(formula));
                    let ctx = this.canvas.getContext("2d");
                    ctx.beginPath();
                    ctx.lineWidth = 1;
                    if(pos[i].click == 'D'){
                        ctx.strokeStyle = '#'+ (3333 - numColor)+ 'FF';
                        ctx.fillStyle = '#FF'+ (3333 - numColor)+ '75';
                    }else if (pos[i].click == 'I') {
                        ctx.strokeStyle = '#FF'+ (3333 - numColor) + '';
                        ctx.fillStyle = '#'+ (3333 - numColor) + 'FF75';
                    }
                    ctx.arc(x , y, (5 * formula), 0, (2*Math.PI));
                    ctx.fill();
                    ctx.stroke();
                    ctx.closePath();
                    position.dibujarCruz(x , y, ((5 * formula) +5));
                }
            }
        }
    },
    enviarPosition(url, data = {
                        method: 'GET', 
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: localStorage.posicionClick
                    }, func = null, funcE = null){
        if (localStorage.posicionClick) {
            fetch(url, data).then(data => {
                console.log('ejecuto');
                if (func) 
                    func(data);
            }).catch(error => {
                console.error('error');
                if (funcE) 
                    funcE(error);
            });
        }else{
            console.log('No tiene posicion');
        }
    },
    testerService(URL, ciclos = 500, func = null, funcE = null,
    datos = {
        method: 'GET', 
        body: null,
        mode: null, // no-cors, *cors, same-origin
        cache: null, // *default, no-cache, reload, force-cache, only-if-cached
        credentials: null, // include, *same-origin, omit
        headers: {
        'Content-Type': 'application/json'
        // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        redirect: null, // manual, *follow, error
        referrerPolicy: null, // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    }) {
        let data = {
            method: datos.method,
            body: datos.body,
            headers: datos.headers,
        };
        if (datos.mode)
            data['mode'] = datos.mode;
        if (datos['cache'])
            data['cache'] = datos['cache'];
        if (datos.credentials)
            data['credentials'] = datos.credentials;
        if (datos.redirect)
            data['redirect'] = datos.redirect;
        if (datos.referrerPolicy)
            data['referrerPolicy'] = datos.referrerPolicy;
        for (let i = 0; i < ciclos; i++) {
            fetch(URL, data).then(data => {
                console.log(data);

                if(data.status == 404)
                    resolve(false)
                else
                    func(data);
                //res.text();//json()
            }).catch(error => {
                //console.error('error traerInformacion', error);
                resolve(false)
            });
        }
    }
}