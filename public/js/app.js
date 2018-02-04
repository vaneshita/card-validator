$(document).ready(function () {
  var element = document.getElementById("textHtm");
  //var child = document.createElement("p").innerHTML = `<input type="text"id="inputName">`;

  // element.append(child + `<input type="text"id="inputName">`);
  var container = $('#textHtm');
  var container1 = $('#textHtm1');
  var container2 = $('#textHtm2');
  var container3 = $('#textHtm3');
  var texto = $('#texto');
  var texto1 = $('#texto1');
  var example1 = $('#example1');
  // Función que muestra todos los restaurantes
  container.append('<div class="text1 d-flex flex-column justify-content-center">' +
      '<h3 class="text-primary"> ¿Que es libraryCard? <h3>' +
      '<p>LibraryCard es una pequeña libreria de javascript Hace el llamado al método isValidCard()</p>' +
      '<p>' + '<em>LibraryCard valida si es una tarjeta es valida o No.</em></p>' +
      '<p>el cual recibe 4 argumentos los cuales son :</p>' +
      `<hr>` +
      '<p>* Nombre del usuario</p>' +
      '<p>* Numero de tarjeta"</p>' +
      '<p>* Codigo de verificación(cvv)</p>' +
      '<p>* Fecha de Expiración</p>' +
      `<hr>` +
      '<p>Encuentra toda la documentación de nuestra librería en :</p>' +
      '<a class="btn btn-primary btn-large" href="https://github.com/vaneshita/card-validator">GITHUB</a>' +
      '</div>');
  container1.append('<div class="text1 d-flex flex-column justify-content-center">' +
      '<h3 class="text-primary"> HTML <h3>' +
      '<p class="uno">' + 'Cambiar los id de los inputs con los siguientes ids :' + '</p>' +
      '<p>' + `< input id="inputName">` + '</p>' +
      '<p>' + `< input id="inputCard">` + '</p>' +
      '<p>' + `< input id="inputCvv">` + '</p>' +
      '<p>' + `< input type="date"id="inputDate">` + '</p>' +
      '<p>' + `También el id del button` + '</p>' +
      '<p>' + `< button id="next" class=" btn btn-primary" data-toggle="modal" data-target="">
  Enviar</button>`+ '</p></div>');

  container2.append('<div class="text1 d-flex flex-column justify-content-center">' +
      '<h3 class="text-primary"> LibraryCard.js <h3>' +
      '<p class="uno">' + 'Enlazar tu index con nuestras librería :' + '</p>' +
      '<p>' + `< script src="js/libraryCard.js"></script>` + '</p>' +
      '<p>' + 'Antes de tu archivo.js principal' + '</p>' +
      '<p>' + 'Ejemplo :' + '</p>' +
      '<p>' + `< script src="js/libraryCard.js"></script>` + '</p>' +
      '<p>' + `< script src="js/app.js"></script>` + '</p>' +
      '<p>' + `<a class="waves-effect waves-light btn btn-primary btn-large 
  " href="https://github.com/YolandaVenturaChz/card-validator/blob/master/public/js/app.js"
  download="libraryCard.js.zip">Descargar libraryCard.js</a>`+ '</p></div>');

  texto.append('<div class=" d-flex flex-column justify-content-center align-items-center">' +
      '<h4 class="text-primary">Aqui te damos las pautas a seguir : </h4></div>');

  example1.append('<div class="text1 d-flex flex-column justify-content-center">' +
      '<h4 class="text-primary">Una parte de Html : </h4>' +
      '<p>' + `< form>` + '</p>' +
      '<p>' + `< label>Nombre Completo</label>` + '</p>' +
      '<p>' + `< input type="text" id="inputName" placeholder="Nombre Completo">` + '</p>' +
      '<p>' + `< label>Numero de Tarjeta</label>` + '</p>' +
      '<p>' + `< input id="inputCard" placeholder="Numero de Tarjeta">` + '</p>' +
      '<p>' + `< label> N° CVV</label>` + '</p>' +
      '<p>' + `< input id="inputCvv" placeholder="cvv">` + '</p>' +
      '<p>' + `< label>Fecha de Expiración</label>` + '</p>' +
      '<p>' + `< input type="date"  id="inputDate" placeholder="Fecha de Expiración">` + '</p>' +
      '<p>' + `< div class="col-12 col-md-12 mb-3">` + '</p>' +
      '<p>' + `< button id="next" class="btn btn-primary" data-toggle="modal" data-target=""> ` + '</p>' +
      '<p>' + 'Enviar' + `< /button>` + '</p>' +
      '<p>' + `< /form>` + '</p></div>');

  texto1.append('<div class=" d-flex flex-column justify-content-center align-items-center">' +
      '<h4 class="text-primary">Aqui te damos las pautas a seguir : </h4></div>');

})
