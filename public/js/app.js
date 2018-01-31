
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
var arr = Object.keys(data);
var json = data;
console.log(json);
debugger;
buttonNext.on('click', function() {
  debugger;
  if (libraryCard.isValidCreditCard(inputName.val(), inputCard.val(), inputCvv.val(), inputDate.val(), arr, json)) {
    alert('usuario valido');
    buttonNext.attr('data-target', '#exampleModal');
    imgModal.attr('src', json[inputCard.val()][json[inputCard.val()].length - 1]);
    nameModal.text(inputName.val());
    cardModal.text(inputCard.val());
    cvvModal.text(inputCvv.val());
    dateModal.text(inputDate.val());
  } else {
    alert('No soy tarjeta');
  }
  // alert('Usuario Activo, tarjeta validada');
  // btn.attr('data-target', '#exampleModal');
  // imgModal.attr('src', data[numberCard][data[numberCard].length - 1]);
  // nameModal.text(name);
  // cardModal.text(numberCard);
  // cvvModal.text(cvv);
  // dateModal.text(date);
})
