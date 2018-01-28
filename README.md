# Valida datos de tarjetas de crédito

Implementar un validador de datos de tarjeta de crédito. La librería debería validar el número de tarjeta de crédito (usando algoritmo de Luhn), fecha de vencimiento, codigo de verificación (cvv) y nombre completo que aparece en la tarjeta.

___

## REQUISITOS

+ README.md con descripción del módulo, instrucciones de instalación, uso y documentación del API.
index.js: Librería debe exportar una función u objeto al entorno global (window) y hacer uso de features de ES6 donde sea apropiado.
+ index.html: Página web de la librería con ejemplo funcionando.
package.json con nombre, versión, descripción, autores, licencia, dependencias, scripts (pretest, test, ...)
+ .eslintrc con configuración para linter (ver guía de estilo de JavaScript)
+ .gitignore para ignorar node_modules u otras carpetas que no deban incluirse en control de versiones (git).

Hacker edition (opcional):

+ Si la librería está dirigida al navegador, debe adherirse al patrón UMD para poder ser usado con AMD, CommonJS y como variable global del navegador.
Integración continua con Travis o Circle CI

___

## Equipo conformado por

+ YOLANDA CHAVEZ
+ VANESSA MENDOZA

___

## Herramientas Utilizadas

+ HTML5
+ CSS3
+ BOOTSTRAP4
___

### ¿QUE ES UNA LIBRERIA EN JS?
Es un conjunto de implementaciones funcionales, codificadas en un lenguaje de programación, que ofrece una interfaz bien definida para la funcionalidad que se invoca.

___

### PLANIFICACIÓN

+ Creamos un [tablero][trello] en trello para mantener un registro de las tareas que iremos realizando cada una.

[trello]: https://trello.com/b/jyHMZGsC/plan-de-accion-libreria-validar-tarjeta
* **Track:** _Common Core_
* **Curso:** _JS Deep Dive: Crea tu propia librería usando JavaScript_
* **Unidad:** _Producto final_

***

El plugin debe recibir una referencia a un elemento del DOM que contenga
`<input>`s con los siguientes nombres (atributo `name`):

* `cn` (Card Number): El número de la tarjeta de crédito
* `exp` (Expiry Date): Fecha de expiración
* `cvv` (Card Verification Value): Código de validación de 3 dígitos
* `name`: Nombre completo como aparece en la tarjeta

___

## Ejemplo

```html
<form>
  <div class="form-group">
    <label for="cn">Número de tarjeta</label>
    <input id="cn" name="cn" />
  </div>
  <div class="form-group">
    <label for="exp">Fecha de vencimiento</label>
    <input id="exp" name="exp" />
  </div>
  <div class="form-group">
    <label for="cvv">CVV</label>
    <input id="cvv" name="cvv" />
  </div>
  <div class="form-group">
    <label for="name">Nombre completo</label>
    <input id="name" name="name" />
  </div>
  <input type="submit" value="Pagar" />
</form>
```

```js
const form = document.querySelector('form');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  if (validateCardDetails(form)) {
    console.log('datos válido... enviar...');
  } else {
    console.log('datos inválidos');
  }
});
```

A la hora de hacer las validaciones, la librería debería de añadir la clase
`.error` a los `<input>`s que no pasen la validación, o la clase `.success`
en caso de que sí pase.
