'use strict';

(function () {
  //  Functions
  var deactivatePage = function () {
    fieldsets.forEach(function (item) {
      item.setAttribute('disabled', 'true');
    });
    mapFiltersContainer.setAttribute('disabled', 'true');
  };

  var onMapPinMainKeydown = function (evt) {
    if (evt.key === 'Enter') {
      activatePage();
      typeAddress(window.data.ads[0]);
      window.pins.renderPins();
    }
  };

  var onMapPinMainMousedown = function (evt) {
    if (evt.button === 0) {
      activatePage();
      typeAddress(window.data.ads[0]);
      window.pins.renderPins();
    }
  };

  var typeAddress = function (item) {
    window.data.addressInput.value = item.location.x + ', ' + item.location.y;
  };

  var activatePage = function () {
    fieldsets.forEach(function (item) {
      item.removeAttribute('disabled');
    });
    window.data.map.classList.remove('map--faded');
    window.data.form.classList.remove('ad-form--disabled');
  };

  // Variables
  var fieldsets = document.querySelectorAll('fieldset');
  var mapFiltersContainer = document.querySelector('.map__filters-container');

  // Code

  deactivatePage();
  typeAddress(window.data.ads[0]);
  window.form.setMinPrice();
  window.form.setCapacity(window.data.ads[0].offer.rooms);
  window.form.setRooms(window.data.ads[0].offer.rooms);

  // Events
  window.data.mapPinMain.addEventListener('mousedown', onMapPinMainMousedown);
  window.data.mapPinMain.addEventListener('keydown', onMapPinMainKeydown);
})();
