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
console.log(localStorage.input);
