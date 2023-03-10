## **Soluciones lionSoft**

Es el nombre que se le quiso dar a un conjunto de archivos en JS, cada uno con su peculiaridad, pero con un mismo objetivo  es ayudar al desarrollador a implementar más fácil esas tareas cotidianas o no tan cotidianas. Todo basado en JavaScript full.
Una de estas grandes y sencillas herramientas es: 

### **Países.js** 

Este archivo o más para ser más exacto es un objeto en JavaScript que contiene código para obtener los países y ciudades de cada país, esto va a facilitar el trabajo, al momento de querer obtener esta información se tiene que hacer una base de datos con toda esta información,  en este caso ya está y va a ser más fácil el acceso, tiene varios métodos para acceder a la información que necesitas.

### **Validform.js**

Esta librería de JavaScript válida los campos 'input' que hay dentro de una etiqueta, también válida los **select** y los **textarea**, este validador aparte de validar campos, lo que hace es crear una copia del formulario igual a como terminó de cargar el formulario en la vista, este formulario sombra sé válida cuando se hacen la validación de los campos, ya que el formulario del cliente es alterable, gracias a esta sombra nos podemos bazar en ella y no en la que puede ser alterada por el cliente.
Esto es muy beneficioso por qué el cliente no va a poder alterar los valores de validación.

Otra de las ventajas es que haciendo las respectivas validaciones de HTML en los inputs, podemos validar los campos, ya que en la programación él busca estos atributos, entonces no hay que llamar atributos extra para validar los campos, solo los naturales de HTML

Esta librería tiene varios métodos como validar campos y obtener los datos en un formato o JSON o **FormData** que son aquellos datos que generalmente se envían en una petición **get post etc ...**

Esta librería también puede limpiar el formulario, como limpiar solo el campo por elemento o por **ID** además podemos acceder a cada uno de los campos del formulario o de otra zona.

También cuenta con pre validadores de escritura, para que el cliente no pueda hacer inyecciones de código sobre los inputs, y aparte poder dar un buen formato a  cada input.

También contamos con un input creado personalizado, para firmas, aquellos formularios que necesitan una firma previa la puede tener, esta firma se devuelve en formato **base64** para enviar o convertir y enviar, esto y mucho más se planea para que esta librería pueda ser de su agrado, al igual si no está satisfecho, o tiene alguna mejora en mente contáctanos para saber el tema que quieres incluir o mejorar.

Al hacer la instancia del objeto, él entre muchas cosas que hace es validar los inputs permitidos para quitarle posibles etiquetas de inyección de scripts o HTML, también cuenta con un método dónde cancela todas las consolas que se carguen, para evitar que se pueda ver información desde la consola

### **Carrito.js**

Es una archivo, librería que guarda mediante **localstorage** un carrito de compras para que lo puedas usar en cualquier lado para agregar al carrito, descontar del carrito y eliminar un producto, hasta un método para hacer la compra, dónde puedes ingresar el efectivo y te devuelve cuánto cambio hay que dar, también cuenta con la posibilidad de actualizar el precio de **x** producto del carrito y te va a hacer las cuentas totales que llevas del carrito actual.

### **Firma.js** 

Una librería que remplaza un input por un **canvas** dónde se puede firmar con mouse o táctil, puedes borrar la firma si no te gusto, y devuelve una imagen en **base64**, muy fácil de manejar

### **EjecutadorJs.js**

Una herramienta para ejecutar una tarea en determinado momento del día, se puede ejecutar de funciones para abajo, lo que necesite ejecutar en tiempo de ejecución del cliente

### **posicionVar.js** 

Este detecta los click izquierdos y derechos de color azul e izquierdos de color rojo, este guarda las coordenadas más la página en que se sitúa y el click que se dio, esta librería se hace con fines de mercadeo, para que el que lo implemente pueda ver cómo se mueve su página con el tiempo. 

Estos archivos se pueden usar de dos formas, importándolas y exportándolas, o como se conoce normalmente llamando el archivo desde un HTML.
Para poder usar esta grandiosa librería tienes que nombrar nos en tu página, que estás usando esta librería, en caso de que estés usando la librería y no nos nombres tienes que avisarnos antes, para llegar a un acuerdo, si no nos veremos en la necesidad de demandar por derechos de autor

Estas librerías no dependen una de la otra, por lo que puedes llamar la que necesitas, no siendo más empezamos ahora a describir más técnicamente cada una de las librerías.


# **ValidForm.js**

Descarga el archivo o impórtalo desde nuestra página 

### **Importar al proyecto**

Una vez lo tengas descargado lo puede consumir de la siguiente manera:

    `<script src="ValidForm.js" type="module"></script>`

También puedes hacerlo con el link sugerido

    `<script src="ValidForm.js" type="module"></script>`

Una vez importado a nuestro proyecto podemos instanciar de la siguiente manera: 

    import {ValidForm} from './ValidForm.js';

    let testVal = new ValidForm('formtest');

'formtest' es el nombre que se le dio al formulario o al div que contiene los campos

Le pasamos el ID o el name del formulario HTML ya él hace el resto, que es el resto, una vez instanciado él prepara el formulario y determina quienes son input para validarlos, también tiene unos atributos que si se ponen en el input podemos agregarle ciertas capacidades al input.

***Estos son los atributos***:

### **alfaNs**

Si se pone este atributo, estamos diciendo que el campo va a recibir solo letras sin espacios ej:

    `<input alfaNs type="" class="" id="" placeholder="" required>`

### **textNs**

Si se pone este atributo, estamos diciendo que el campo va a recibir solo letras y números sin espacios ej:

    `<input textNs type="" class="" id="" placeholder="" required>`

### **number**

Si se pone este atributo, estamos diciendo que el campo va a recibir solo números sin espacios ej:

    `<input number type="" class="" id="" placeholder="" required>`

### **alfa**

Si se pone este atributo, estamos diciendo que el  campo va a recibir solo letras, incluyendo un espacio por palabra

    `<input alfa type="" class="" id="" placeholder="" required>`

### **text**

Si se pone este atributo, estamos diciendo que el campo va a recibir solo letras y números, incluyendo un espacio por palabra

    `<input text type="" class="" id="" placeholder="" required>`

### **textTilde**

Si se pone este atributo, estamos diciendo que el campo va a recibir solo números y letras, incluido un espacio por letra y las tildes: áéíóú

    `<input textTilde type="" class="" id="" placeholder="" required>`

### **numberPoin**

Si se pone este atributo, estamos diciendo que el campo va a recibir solo números y mientras que se escribe se le van agregando los puntos de milésimas. 

    `<input numberPoin type="" class="" id="" placeholder="" required>`

### **noCopy**

Si se pone este atributo, estamos diciendo que el campo no se va a poder copiar. 

    `<input noCopy type="" class="" id="" placeholder="" required>`

### **noPaste**

Si se pone este atributo, estamos diciendo que el campo no se va a poder pegar. 

    `<input noPaste type="" class="" id="" placeholder="" required>`

### **noCut**

Si se pone este atributo, estamos diciendo que el campo no se va a poder cortar. 

    `<input noCut type="" class="" id="" placeholder="" required>`

### **noDrag**

Si se pone este atributo, estamos diciendo que el campo no se va a poder arrastrar y soltar valores. 

    `<input noDrag type="" class="" id="" placeholder="" required>`

### **protected**

Si se pone este atributo, estamos diciendo que el campo no se va a poder arrastrar y soltar, ni copiar, pegar y cortar.

    `<input protected type="" class="" id="" placeholder="" required>`

También podemos crear un campo **password** con el Ojo poniéndole a la clase 'pw' de la siguiente forma

    `<div class="pw">
        <input type="password" class="" id="" placeholder="" required>
    </div>`

    ó

    `<div class="pw"></div>`

de esta forma una vez este instanciado él mira quien tiene esa clase para agregar el ojo y los funcionamientos del mismo.

### **type="signature"**

Si el input tiene el type de tipo firma 'signature' se crea un campo firma en ves del input normal, perfecto para enviar firmar en Base64, pruebalo!

`<input type="signature" class="" id="" placeholder="" required>`

### **different**

Es un atributo que permite a los inputs de tipo color tener un color por definición, esto se hace para que no tenga el color negro por definición

## **Métodos:**

### **constructor(elemt, espesificacion = {mostrarImagen: true})**

Inicia los métodos para el formulario que se asocie

elemt: id o elemento form

espesificacion: 

    El tipo de espesificaciones iniciales que quiere proporcionar:

        mostrarImagen: true/false. mostrar imagen en los tipo file si es imagen
        eye: SVG. modifica el ojo del password
        eyeSlash: SVG. modifica el ojo del password tachada
        alfa: cambia las reglas predeterminadas del teclao en los inputs 
        alfaNS: cambia las reglas predeterminadas del teclao en los inputs
        textNS: cambia las reglas predeterminadas del teclao en los inputs
        text: cambia las reglas predeterminadas del teclao en los inputs
        textTilde: cambia las reglas predeterminadas del teclao en los inputs
        number: cambia las reglas predeterminadas del teclao en los inputs
        numberP: cambia las reglas predeterminadas del teclao en los inputs
        space: cambia las reglas predeterminadas del teclao en los inputs

### **bloqueoInspeccionar()**

¡Bloquea el click derecho y borrar console.log, pruébalo!

### **bloqueoMsgConsole()**

¡Borrar todos los console, ya no se podrán ver pruébalo!

### **getId(id)**

Devuelve el elemento del formulario usando el id

### **limpiarForm()**

Limpia todo el formulario

### **limpiarCampoId(id)**

Limpia un campo del formulario en específico por id

### **limpiarCampo(input)**

Limpia un campo del formulario en específico usando el input 'element'

### **crearObjetoJson(conVacios = false, cabeceras = {})**

conVacios: si está en true, devuelve un objeto completo de los campos, así este vacío, está predeterminado con false, si está en false solo se muestran los campos diligenciados

cabeceras: recibe un objeto donde el alias es el id del input y el valor que es el valor que quiere que aparezca en los arreglos que devuelve

return: devuelve un objeto **JSON** de los inputs diligenciados del formulario

### **crearFormData(conVacios = false, cabeceras = {})**

conVacios: si está en true, devuelve un objeto completo de los campos, así este vacío, está predeterminado con false, si esta en false solo se muestran los campos diligenciados

cabeceras: recibe un objeto donde el alias es el id del input y el valor que es el valor que quiere que aparezca en los arreglos que devuelve

return: devuelve un objeto **FormData** de los inputs diligenciados del formulario

### **validarCamposExpert(campos = {}, conMsg = false)**

campos: recibe un objeto o un array donde el contenido de cada espacio es el id que quiere consultar del formulario instanciado

conMsg: si está en true muestra el mensaje como lo muestra generalmente el navegador y retorna el input, si está en false retorna solo el mensaje de error

return: retorna true so los campos están bien diligenciados, si no puede devolver el input o un mensaje según lo modifique

### **validarCampos(conMsg = true)**

conMsg: si está en false retorna un msg de error, si está en true muestra el mensaje como lo muestra generalmente el navegador con los radio y checkbox, con el resto muestra un msg personalizado

return: retorna true si los campos están bien validados, si no puede devolver un msg o un input según lo modifique

### **static validarCampoFile(value, regex = /jpg|jpeg|png|gif/g)**

Método estático que valida el campo de tipo file

value: la extensión que tiene cada File 'cada archivo'

regex: son los tipos de archivos que se evalúan actualmente, que son las imágenes

return: true si es válido false si no

### **static validarCampoUrl(value, regex = /https:\/\/.{1,200}|http:\/\/.{1,200}/g)**

value: la URL que quiere validar

regex: la regex de los tipos de URL permitida que son http y https

return: true si es válido false si no

### **static validarCampoCorreo(value, regex = /regexcorreo/g)**

value: el correo a validar

regex: la regex que desea que valide el correo

return: true si es válido false si no

### **static validarNumCaracteres(value, maxlength, minlength)

value: el valor que desea evaluar

maxlength: el máximo a evaluar

minlength: el mínimo a evaluar

return: true si es válido false si no

### **static validarMaxMin(value, max, min)**

value: el valor que desea evaluar

maxlength: el máximo a evaluar

minlength: el mínimo a evaluar

return: true si es válido false si no

### **static validarCamposExpert(campos = {})**

campos: recibe un objeto o un array donde el contenido de cada espacio es el id que quiere consultar de todo el DOM

return: true si es válido si no devuelve el input asociado

### **static validarCampo(id)**

id: del campo a evaluar, este id puede estar fuera del formulario instancia do

return: true si es válido false si no

## **Variables:**

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


# **Paises.js**

Descarga el archivo o impórtalo desde nuestra página 

### **Importar al proyecto**

Una vez lo tengas descargado lo puede consumir de la siguiente manera:

    `<script src="Paises.js" type="module"></script>`

También puedes hacerlo con el link sugerido

    `<script src="Paises.js" type="module"></script>`

Una vez importado a nuestro proyecto podemos instanciar de la siguiente manera: 

    import {Paises} from './Paises.js';

    let testVal = new Paises();

## **Métodos:**

### **obtenerPaises(nombre)**
nombre: el nombre del país a buscar

return: retorna un arreglo con los países encontrados, si esta vacío muestra todos los países disponibles pruébalo!

### **obtenerPaisesXcontinente(continente)**
***continente:***

    Los continentes que sean parecidos a:

        - Asia

        - América del norte

        - América central

        - América del sur

        - África

        - Antártida

        - Europa

        - Oceanía

return: devuelve un array de los países por continente

### **obtenerPaisObj(pais)**

pais: país que deseca buscar

return: retorna un objeto con los países que encuentre

### **obtenerCiudades(pais)**

pais: país que deseca buscar

return: retorna un objeto con los países que encuentre

### **obtenerCiudadObj(pais, ciudad)**

pais: país que deseca buscar

ciudad: la ciudad que sesea buscar, este valor puede ir vacío

return: retorna un objeto con lo que encuentre

### **normalizarText(cadena)**

Normaliza una cadena de tal forma que se puedan comparar, normalizar es por ejemplo normalizar la palabra 'así' quedaría igual a 'asi'

cadena: cadena a normalizar

retorna cadena normalizada


# **EjecutadorJs.js**

Descarga el archivo o impórtalo desde nuestra página 

### **Importar al proyecto**

Una vez lo tengas descargado lo puede consumir de la siguiente manera:

    `<script src="EjecutadorJs.js" type="module"></script>`

También puedes hacerlo con el link sugerido

    `<script src="EjecutadorJs.js" type="module"></script>`

Una vez importado a nuestro proyecto podemos instanciar de la siguiente manera: 

    import {EjecutadorJs} from './EjecutadorJs.js';

    let testVal = new EjecutadorJs();

## **Métodos:**

### **constructor()**

Inicia el contador

### **horaActual()**

Muestra la hora actual

### **horaActualSinSeg()**

Muestra la hora actual sin segundos

### **addTareaEjecutar(metodo, tiempo = horaActual())**

Agrega una tarea al ejecutador para ejecutar en cierto momento

metodo: metodo que desea ejecutar

tiempo: el tiempo en hora militar con segundos

### **comparaTiempos(hora1 = horaActual(), hora2 = horaActual())**

Compara los tiempos si son iguales devuelve true si no false

hora1: tiempo a comparar

hora2: tiempo a comparar

return: true o false si son diferentes


# **CarritoCompras.js**

Descarga el archivo o impórtalo desde nuestra página 

### **Importar al proyecto**

Una vez lo tengas descargado lo puede consumir de la siguiente manera:

    `<script src="CarritoCompras.js" type="module"></script>`

También puedes hacerlo con el link sugerido

    `<script src="CarritoCompras.js" type="module"></script>`

Una vez importado a nuestro proyecto podemos instanciar de la siguiente manera: 

    import {CarritoCompras} from './CarritoCompras.js';

    let testVal = new CarritoCompras();

## **Métodos:**

### **constructor()**

Inicia un localstorage para el objeto carrito

### **addCarrito(valor, cantidad, complemento = {}, guardar = 'id')**

Agrega al carrito

valor: valor del producto

cantidad: la cantidad del producto

complemento: es un objeto conde puedes guardar más datos

guardar: es el valor a consultar en complemento para guardar el producto con el id respectivo si lo tiene en complemento

### **get total()**

Obtiene el total del producto

### **getCarrito(value = null)**

Obtiene el producto de un carrito o todo el carrito según el value

value: el identificador del carrito

### **actualizarPrecioProducto(value, valor)**

Actualiza el precio de un producto según su value

value: el identificador del carrito

valor: el valor que quiere actual

### **deleteCatidadProducto(value, cantidad)**

Elimina la cantidad de un producto en específico haciendo los cálculos correspondientes de totales, según su value

value: el identificador del carrito

cantidad: cantidad a eliminar del carrito

### **deleteCarrito(value = null)**

Elimina todo el carrito o uno en específico según su value

value: el identificador del carrito

### **comprar(valor)**

Hace la compra del producto limpiando y devolviendo el cambio

valor:el valor con el que paga el cliente

return: retorna un objeto con lo siguiente:

    valorApagar

    valor

    cambio

también limpia el carrito

### **cantidadDproductos()**

Muestra la cantidad de productos comprados

### **toStringCarrito(value = null)**

value: el identificador del carrito

return: devuelve una cadena del carrito en específico o todo el carrito

## **Variables:**

moneda = 'COP';


# **positionVar.js**

Esta es una librería que registra los click y los pinta en pantalla

Descarga el archivo o impórtalo desde nuestra página 

### **Importar al proyecto**

Una vez lo tengas descargado lo puede consumir de la siguiente manera:

    `<script src="positionVar.js" type="module"></script>`

También puedes hacerlo con el link sugerido

    `<script src="positionVar.js" type="module"></script>`

## **Métodos:**

### **crearPosicion(e, click)**
este metodo no se usa solo a nivel interno, es para añadir un click al arreglo de clicks

### **iniciarRastreoClI()**
iniciarastreo de clicks izquierdos y derechos

### **crearCanvas()**
despues de aver iniciado el rastreo podemos crear el canvas, este metodo lo que hace es pintar los puntos en la pantalla

### **eliminarCanvas()**
este metodo elimina el canvas que se dibujo con crearCanvas()

### **hacerClickPocision(x, y)**
este metodo lo que hace es intentar hacer click en una posicion determinada, digo intentar por que hace el intento, cuando es un boton deja hacer el click, cuando es otro elemento no de deja

### **sumarArrPosicion(arr1, arr2)**
suma dos arrays del mismo estilo y los combina de tal forma que se suman y ya no se repite posiciones

### **dibujarCruz(x, y, ancho = 25)**
este metodo no se usa solo a nivel interno,, lo que hace es dibujar una cruz en el canvas

### **pintarPuntos()**
pinta los puntos sobre el canvas llamado con crearCanvas()

## **Variables:**

canvas

# OTROS:

- Abrir archivo index para entender como implementar las librerias planteadas

    `<script src="index.js" type="module"></script>`

- Por el momento se tiene el objeto con algunos datos vacíos que más adelante se irán poniendo para dejar la librería completa
- Si de pronto no hay una capital o un país, etc. me puedes escribir y decirme para hacer los respectivos cambios o mejoras
- Si se encuentra algún tipo de Bug o mejora reportarlo por ese medio en algún comentario, por el momento