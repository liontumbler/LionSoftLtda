**Soluciones lionSoft**

Es el nombre que se le quiso dar a un conjunto de archivos en JS, cada uno con su peculiaridad, pero con un mismo objetivo  es ayudar al desarrollador a implementar más fácil esas tareas cotidianas o no tan cotidianas. Todo basado en JavaScript full.
Una de estas grandes y sencillas herramientas es: 

**Países.js** 

este archivo o más para ser más exacto es un objeto en JavaScript que contiene código para obtener los países y ciudades de cada país, esto va a facilitar el trabajo, al momento de querer obtener esta información se tiene que hacer una base de datos con toda esta información,  en este caso ya está y va a ser más fácil el acceso, tiene varios métodos para acceder a la información que necesitas.

**Validform.js**

Esta librería de JavaScript válida los campos 'input' que hay dentro de una etiqueta, también válida los **select** y los **text área**, este validador aparte de validar campos, lo que hace es crear una copia del formulario igual a como terminó de cargar el formulario en la vista, este formulario sombra sé válida cuando se hacen la validación de los campos, ya que el formulario del cliente es alterable, gracias a esta sombra nos podemos bazar en ella y no en la que puede ser alterada por el cliente.
Esto es muy beneficioso por qué el cliente no va a poder alterar los valores de validación.

Otra de las ventajas es que haciendo las respectivas validaciones de HTML en los inputs, podemos validar los campos, ya que en la programación él busca estos atributos, entonces no hay que llamar atributos extra para validar los campos, solo los naturales de HTML

Esta librería tiene varios métodos como validar campos y obtener los datos en un formato o JSON o **FormData** que son aquellos datos que generalmente se envían en una petición **get post etc ...**

Esta librería también puede limpiar el formulario, como limpiar solo el campo por elemento o por **ID** además podemos acceder a cada uno de los campos del formulario o de otra zona.

También cuenta con pre validadores de escritura, para que el cliente no pueda hacer inyecciones de código sobre los inputs, y aparte poder dar un buen formato a  cada input.

También contamos con un input creado personalizado, para firmas, aquellos formularios que necesitan una firma previa la puede tener, esta firma se devuelve en formato **base64** para enviar o convertir y enviar, esto y mucho más se planea para que esta librería pueda ser de su agrado, al igual si no está satisfecho, o tiene alguna mejora en mente contáctanos para saber el tema que quieres incluir o mejorar.

Al hacer la instancia del objeto, él entre muchas cosas que hace es validar los inputs permitidos para quitarle posibles etiquetas de inyección de scripts o HTML, también cuenta con un método dónde cancela todas las consolas que se carguen, para evitar que se pueda ver información desde la consola

**Carrito.js**

es una archivo, librería que guarda mediante **localstorage** un carrito de compras para que lo puedas usar en cualquier lado para agregar al carrito, descontar del carrito y eliminar un producto, hasta un método para hacer la compra, dónde puedes ingresar el efectivo y te devuelve cuánto cambio hay que dar, también cuenta con la posibilidad de actualizar el precio de **x** producto del carrito y te va a hacer las cuentas totales que llevas del carrito actual.

**Firma.js** 

una librería que remplaza un input por un **canvas** dónde se puede firmar con mouse o táctil, puedes borrar la firma si no te gusto, y devuelve una imagen en **base64**, muy fácil de manejar

**EjecutadorJs.js**

Una herramienta para ejecutar una tarea en determinado momento del día, se puede ejecutar de funciones para abajo, lo que necesite ejecutar en tiempo de ejecución del cliente

**posicionVar.js** 

Este detecta los click izquierdos y derechos de color azul e izquierdos de color rojo, este guarda las coordenadas más la página en que se sitúa y el click que se dio, esta librería se hace con fines de mercadeo, para que el que lo implemente pueda ver cómo se mueve su página con el tiempo. 

Estos archivos se pueden usar de dos formas, importándolas y exportándolas, o como se conoce normalmente llamando el archivo desde un HTML.
Para poder usar esta grandiosa librería tienes que nombrar nos en tu página, que estás usando esta librería, en caso de que estés usando la librería y no nos nombres tienes que avisarnos antes, para llegar a un acuerdo, si no nos veremos en la necesidad de demandar por derechos de autor

Estas librerías no dependen una de la otra, por lo que puedes llamar la que necesitas, no siendo más empezamos ahora a describir más técnicamente cada una de las librerías.

***ValidForm.js***

Descarga el archivo o impórtalo desde nuestra página 
1. Importar al proyecto
Una vez lo tengas descargado lo puede consumir de la siguiente manera:

    `<script src="ValidForm.js" type="module"></script>`
    
    También puedes hacerlo con el link sugerido

    `<script src="ValidForm.js" type="module"></script>`
    
Una vez importado a nuestro proyecto podemos instanciar de la siguiente manera: 

    import {ValidForm} from './ValidForm.js';

    let testVal = new ValidForm('formtest');

'formtest' es el nombre que se le dio al formulario o al div que contiene los campos

Le pasamos el ID o el name del formulario HTML ya él hace el resto, que es el resto, una vez instanciado él prepara el formulario y determina quienes son input para validarlos, también tiene unos atributos que si se ponen en el input podemos agregarle ciertas capacidades al input.

Estos son los atributos:
**alfaNs**

Si se pone este atributo, estamos diciendo que el campo va a recibir solo letras sin espacios ej:

    `<input alfaNs type="" class="" id="" placeholder="" required>`

**textNs**

Si se pone este atributo, estamos diciendo que el campo va a recibir solo letras y números sin espacios ej:

    `<input textNs type="" class="" id="" placeholder="" required>`

**number**

Si se pone este atributo, estamos diciendo que el campo va a recibir solo números sin espacios ej:

    `<input number type="" class="" id="" placeholder="" required>`

**alfa**

Si se pone este atributo, estamos diciendo que el  campo va a recibir solo letras, incluyendo un espacio por palabra

    `<input alfa type="" class="" id="" placeholder="" required>`
    
**text**

Si se pone este atributo, estamos diciendo que el campo va a recibir solo letras y números, incluyendo un espacio por palabra

    `<input text type="" class="" id="" placeholder="" required>`

**textTilde**

Si se pone este atributo, estamos diciendo que el campo va a recibir solo números y letras, incluido un espacio por letra y las tildes: áéíóú

    `<input textTilde type="" class="" id="" placeholder="" required>`

**numberPoin**

Si se pone este atributo, estamos diciendo que el campo va a recibir solo números y mientras que se escribe se le van agregando los puntos de milésimas. 

    `<input numberPoin type="" class="" id="" placeholder="" required>`

**noCopy**

Si se pone este atributo, estamos diciendo que el campo no se va a poder copiar. 

    `<input noCopy type="" class="" id="" placeholder="" required>`

**noPaste**

Si se pone este atributo, estamos diciendo que el campo no se va a poder pegar. 

    `<input noPaste type="" class="" id="" placeholder="" required>`

**noCut**

Si se pone este atributo, estamos diciendo que el campo no se va a poder cortar. 

    `<input noCut type="" class="" id="" placeholder="" required>`

**noDrag**

Si se pone este atributo, estamos diciendo que el campo no se va a poder arrastrar y soltar valores. 

    `<input noDrag type="" class="" id="" placeholder="" required>`

**protected**

Si se pone este atributo, estamos diciendo que el campo no se va a poder arrastrar y soltar, ni copiar, pegar y cortar.

    `<input protected type="" class="" id="" placeholder="" required>`

también podemos crear un campo password con el Ojo poniéndole a la clase 'pw' de la siguiente forma

    `<div class="pw">
        <input type="password" class="" id="" placeholder="" required>
    </div>`

    ó

    `<div class="pw"></div>`

    
de esta forma una vez este instanciado él mira quien tiene esa clase para agregar el ojo y los funcionamientos del mismo.


**type="signature"**

si el input tiene el type de tipo firma 'signature' se crea un campo firma en ves del input normal, perfecto para enviar firmar en Base64, pruebalo!

    `<input type="signature" class="" id="" placeholder="" required>`










-
-
-
-
-
-
-
-
-
-
-
-
-
-


- Abrir archivo index para entender como implementar paises.js y ValidForm.js

    `<script src="index.js" type="module"></script>`
- Implementar archivo paises.js para obtener los datos, manejo de los países y ciudades según desee

    `<script src="paises.js" type="module"></script>`

- Por el momento se tiene el objeto con algunos datos vacíos que más adelante se irán poniendo para dejar la librería completa
- Si de pronto no hay una capital o un país, etc. me puedes escribir y decirme para hacer los respectivos cambios o mejoras
- Si se encuentra algún tipo de Bug reportarlo por ese medio en algún comentario, por el momento