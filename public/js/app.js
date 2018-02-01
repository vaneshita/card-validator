$(document).ready(function() {
  var buttonNext = $('#next');
  var inputCard = $('.inputCard');
  var inputDate = $('.inputDate');
  var inputCvv = $('.inputCvv');
  var inputName = $('.inputName');
  var imgModal = $('#imgModal');
  var nameModal = $('.name');
  var cardModal = $('card');
  var cvvModal = $('.cvv');
  var dateModal = $('.fecha');
  buttonNext.on('click', function() {
    debugger;
    if (libraryCard.isValidCreditCard(inputName.val(), inputCard.val(), inputCvv.val(), inputDate.val(), data)) {
      alert('usuario valido');
      buttonNext.attr('data-target', '#exampleModal');
      imgModal.attr('src', data[inputCard.val()][data[inputCard.val()].length - 1]);
      nameModal.text(inputName.val());
      cardModal.text(inputCard.val());
      cvvModal.text(inputCvv.val());
      dateModal.text(inputDate.val());
    } else {
      alert('No soy tarjeta');
    }
  });
});
