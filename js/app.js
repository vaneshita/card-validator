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
var $inputCard = $('#cn');
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
  var nroinput = $inputCard.val();
  localStorage.input = $inputCard.val();
  objeto.isValidCreditCard($(this).val().trim(), $buttonNext);
  $buttonNext.on('click', function(event) {
    event.preventDefault();
    $(location).attr('href', 'views/datosUsuario.html');
  });
});
console.log(data);
console.log(data[localStorage.input][0]);
console.log(Object.keys(data[localStorage.input]));
var busquedaTarjeta = encontrar(Object.keys(data), localStorage.input);
if (busquedaTarjeta) {
  $('#nroTarjeta').text(localStorage.input);
  $('#name').text(data[localStorage.input][0]);
  $('#date').text(data[localStorage.input][1]);
  $('#cvv').text(data[localStorage.input][2]);
  $('#verification').text(data[localStorage.input][3]);
} else {
  // alert('La basre de datos se esta actualizand. Gracias por su comprension');
}
