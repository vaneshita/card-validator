// const form = document.querySelector('form');
// form.addEventListener('submit', (event) => {
//   event.preventDefault();
//   if (validateCardDetails(form)) {
//     console.log('datos válido... enviar...');
//   } else {
//     console.log('datos inválidos');
//   }
// });

var $buttonNext = $('#next');
var $inputCard = $('.inputCard');
var $inputDate = $('.inputDate');
var $inputCvv = $('.inputCvv');
var $inputName = $('.inputName');
function encontrar(array, element) {
  var encontro = false;
  // your code here
  for (var i = 0; i < array.length; i++) {
    if (array[i] === element) {
      var encontro = true;
      return encontro;
    }
  }
}
$buttonNext.on('click', function(event) {
  debugger;
  if (objeto.isValidCreditCard($inputCard.val(), $inputDate.val(), $inputCvv.val(), $inputName.val())) {
    var busquedaTarjeta = encontrar(Object.keys(data), $inputCard.val());
    if (busquedaTarjeta) {
      if (encontrar(data[$inputCard.val()], $inputCvv.val())) {
        alert('Usuario Activo, tarjeta validada');
        $buttonNext.attr('data-target', '#exampleModal');
        $('#imgModal').attr('src', data[$inputCard.val()][data[$inputCard.val()].length - 1]);
        $('.name').text($inputName.val());
        $('card').text($inputCard.val());
        $('.cvv').text($inputCvv.val());
        $('.fecha').text($inputDate.val());
      }
    } else {
      alert('Usuario activo No encontrado en la data');
    }
  } else {
    console.log('error');
    alert('los datos no son correctos');
  }
});
