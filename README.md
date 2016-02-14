# abanico.js
### ¿Qué es abanico.js?
**Abanico.js** es un **plugin jQuery**, que se complementa perfectamente si usamos **Bootstrap**, básicamente su función consiste en efectuar una búsqueda a través de un input, el cual filtra la información a buscar, cada ves que se digita un caracter se despliega un abanico de posibles valores encontrados coincidentes con el caracter ingresado.
***
### Pre-requisitos
+ [jQuery](https://jquery.com/download/)
+ [Bootstrap (Opcional)](http://getbootstrap.com/)

***
### Instalación
Necesitas descargar [abanico.js](https://github.com/jhonazsh/abanico.js/blob/master/js/abanico.js) y guardarlo en el directorio de tu proyecto en la sección js/, luego se debe incluir en el archivo donde se va a usar, de la siguiente forma:

```html 
<script src="js/jquery.js"></script>
<script src="js/abanico.js"></script>
```
***
### Uso Básico
Se debe agregar un elemento `<div>` con clase **.content-abanico**, y colocar en este, un elemento `<input>`; al cual opcionalmente puedes agregar la clase de bootstrap **.form-control**. Colocar un id *ejemplo-abanico*.

```html
<div class="content-abanico">
  <input type="text" class="form-control" id="ejemplo-abanico">
</div>
```

Invocar al plugin **abanico.js**, seleccionando el elemento `<input>` a través del id.

```javascript
$('#ejemplo-abanico').abanico(data, key);
```

Pero esto no acaba aquí, ya que el plugin recibe dos parámetros, el primero es la data formateada en tipo **JSON**, es decir los datos que servirán como base de información para poder buscar en ella, y el otro parámetro es la clave.

```javascript
var dataServer = [
   {valor:'jose garcia', edad:20},
   {valor:'sandro alvarado', edad:23},
   {valor:'pedro gutierrez', edad:21}
]

$('#ejemplo-abanico').abanico(dataServer, 'valor');
```
