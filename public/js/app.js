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
var arr = [$inputCard.val(), $inputDate.val(), $inputCvv.val(), $inputName.val()];
console.log(arr);
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
$inputCard.on('input', function(event) {
  event.preventDefault();
  localStorage.inputCard = $(this).val();
});
$inputDate.on('input', function(event) {
  event.preventDefault();
  localStorage.inputDate = $(this).val();
});
$inputCvv.on('input', function(event) {
  event.preventDefault();
  localStorage.inputCvv = $(this).val();
});
$inputName.on('input', function(event) {
  event.preventDefault();
  localStorage.inputName = $(this).val();
});
$buttonNext.on('click', function(event) {
  if (objeto.isValidCreditCard(localStorage.inputCard, localStorage.inputDate, localStorage.inputCvv, localStorage.inputName, $buttonNext)) {
    $(location).attr('href', 'views/datosUsuario.html');
  } else {
    console.log('error');
  }
});
console.log(data);
// console.log(data[localStorage.inputCard][0]);
// console.log(Object.keys(data[localStorage.inputCard]));
var busquedaTarjeta = encontrar(Object.keys(data), localStorage.inputCard);
if (busquedaTarjeta) {

} else {
  // alert('La basre de datos se esta actualizand. Gracias por su comprension');
}
