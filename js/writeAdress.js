'use strict';

(function () {
  var typePinAdress = function (x, y) {
    window.data.addressInput.value = x + ', ' + y;
  };

  var h1 = 10;
  window.writeArdress = {
    typePinAdress: typePinAdress,
    h1: h1
  };
})();
