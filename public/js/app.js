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
    var texto2 = $('#texto2');
    var example1 = $('#example1');
    var example2 = $('#example2');
    var datos = $('#datos');
    var carrusel = $('#carrusel');
    var footer = $('#pageFooter')
    // Función que muestra todos los restaurantes
    container.append('<div class="text1 d-flex flex-column justify-content-center align-items-center col-12">' +
        '<h3 class=""> ¿Que es libraryCard? <h3>' +
        '<p>LibraryCard es una pequeña libreria de javascript Hace el llamado al método isValidCard()</p>' +
        '<p>' + '<em>LibraryCard valida si una tarjeta es valida o No.</em></p>' +
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
    container1.append('<div class="text1 d-flex flex-column justify-content-center align-items-center">' +
        '<h3 class=""> HTML <h3>' +
        '<p class="uno">' + 'Cambiar los id de los inputs con los siguientes ids :' + '</p>' +
        '<p>' + `< input id="inputName">` + '</p>' +
        '<p>' + `< input id="inputCard">` + '</p>' +
        '<p>' + `< input id="inputCvv">` + '</p>' +
        '<p>' + `< input type="date"id="inputDate">` + '</p>' +
        '<p>' + `También el id del button` + '</p>' +
        '<p>' + `< button id="next" class=" btn btn-primary" data-toggle="modal" data-target="">
    Enviar</button>`+ '</p></div>');

    container2.append('<div class="text1 d-flex flex-column justify-content-center align-items-center">' +
        '<h3 class=""> LibraryCard.js <h3>' +
        `<hr>` +
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
        '<h3 class="">Aqui te damos las pautas a seguir : </h3></div>');

    example1.append('<div class="text1 d-flex flex-column justify-content-center">' +
        '<h3 class="">Una parte de Html : </h3>' +
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
        '<h3 class="">Aqui te damos las pautas a seguir : </h3></div>');
    example2.append('<div class="text1 d-flex flex-column justify-content-center">' +
        '<h3 class="">Para enlazar tu Html : </h3>' +
        '<p>' + `< script src="js/libraryCard.js"></script>` + '</p>' +
        '<p>' + `< script src="js/app.js"></script>` + '</p></div>');

    datos.append('<div class=" text1 d-flex flex-column justify-content-center">' +
        '<h3 class="">Datos para la demo : </h3>' +
        '<p>Usar los siguientes datos : </p>' +
        '<p>* Nombre del usuario: hugo gomez yuma</p>' +
        '<p>* Numero de tarjeta: 4544164785372342</p>' +
        '<p>* Codigo de verificacion(cvv): 223456</p>' +
        '<p>* Fecha de Expiracion: 23/09/2019</p></div>');

    texto2.append('<div class=" d-flex flex-column justify-content-center align-items-center">' +
        ' <a href="" class="font-weight-bold btnDemo1"><span>DEMO</span></a></div>');

    carrusel.append(' <div class="row">' +
        '<div id="carouselExampleIndicators" class="carousel slide col-md-12" data-ride="carousel">' +
        ' <div class="carousel-inner">' +
        '<div class="carousel-item active">' +
        '<img class="d-block ancho Responsive image" src="assets/images/visa2.jpg" alt="First slide">' +
        '</div>' +
        '<div class="carousel-item">' +
        '<img class="d-block ancho Responsive image" src="assets/images/visa2.jpg" alt="Second slide">' +
        '</div></div></div></div></div>');

    footer.append('<div">' +
        '<h3 class="">LibraryaCard.js : </h3>' +
         '<nav class="linkHeader d-flex flex-row justify-content-between">' +
          '<ul class="d-flex flex-row justify-content-between align-items-center col-12 col-md-12">'+
           '<li><a href=""><span ><img class=""src="assets/icons/favicon-96x96.png" alt=""></span></a></li>'+
           '<li><a style="border: 1px solid blue; padding: 0.6em; border-radius:5px;" href="" class="font-weight-bold "><span>DEMO</span></a></li>'+
           '<li><a  href="https://github.com/vaneshita/card-validator" class="font-weight-bold "><span class="icon-github-circled-alt2"></span></a></li>'+
           '<li><a  href="" class="font-weight-bold "><span class="icon-download"></span></a></li>'+
          '</ul>'+         
        '</nav>'+
        '<p>Creadoras :</p>' +
        '<p>Vanessa Mendoza Inoñan</p>' +
        '<p>Yolanda Ventura Chavés</p></div>');

})
