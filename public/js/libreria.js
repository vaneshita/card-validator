(function() {
  // Funciones que habilita el boton del formulario
  function activeButton(btn) {
    btn.attr('disabled', false);
  }

  // Funcion que desabilita el boton del formulario
  function desactiveButton(btn) {
    btn.attr('disabled', true);
  }

  // Funcion que valida la longitud del input ingresado por el usuario
  function longitud(input) {
    if (input === undefined) {
      return undefined;
    } else if (input.trim().length === 16) {
      return input;
    }
  }

  // Funcion que valida la longitud del input ingresado por el usuario
  function soloNumeros(input) {
    var regex = /^[0-9]+$/;
    if (regex.test(input)) {
      return input;
    }
  }
  function soloLetras(input) {
    var regex = /[A-Za-z]+$/;
    if (regex.test(input)) {
      return input;
    }
  }
  function validarFormatoFecha(campo) {
    var RegExPattern = /^\d{1,2}\/\d{1,2}\/\d{2,4}$/;
    if (campo === undefined) {
      return undefined;
    } else if ((campo.match(RegExPattern))) {
      return campo;
    }
  }
  function validaCvv(cvv) {
    if (cvv === undefined) {
      return undefined;
    } else if (cvv.trim().length === 4) {
      return cvv;
    }
  }
  function validaName(name) {
    if (name === undefined) {
      return undefined;
    } else if (name.trim().length > 6) {
      return name;
    }
  }
  var objeto = {
    isValidCreditCard: function(numberCard, date, cvv, name, btn) {
      var creditCardNumber = soloNumeros(longitud(numberCard));
      var validaDate = validarFormatoFecha(date);
      var validarCvv = soloNumeros(validaCvv(cvv));
      var validarName = soloLetras(validaName(name));
      if (creditCardNumber !== undefined && validaDate !== undefined && validarCvv !== undefined && validarName !== undefined) {
        var arr = [];
        var sumaTotal = 0;
        for (var index = creditCardNumber.length - 1; index >= 0; index--) {
          arr.push(creditCardNumber[index]);
        }
        for (var index = 1; index < arr.length; index = index + 2) {
          arr[index] = arr[index] * 2;
          if (arr[index] >= 10) {
            arr[index] = arr[index] - 9;
          }
        }

        for (var index = 0; index < arr.length; index++) {
          sumaTotal = sumaTotal + parseInt(arr[index]);
        }

        if (sumaTotal % 10 === 0) {
          console.log('Es una tarjeta valida');
          return true;
          activeButton(btn);
        } else {
          console.log('No es un numero valido');
          return false;
          desactiveButton(btn);
        }
      } else {
        console.log('Verifique el numero de su tarjeta');
        return false;
        desactiveButton(btn);
      }
    },
  };
  if (typeof window.objeto === 'undefined') {
    window.objeto = window._ = objeto;
  } else {
    console.log('Ya existe libreria');
  }
})();
