'use strict';
(function() {

  // Показываем диалоговое окно выбора мага
  var userDialog = document.querySelector('.setup');
  userDialog.classList.remove('hidden');

  // Показываем нижнию панель с рандомными магами
  userDialog.querySelector('.setup-similar').classList.remove('hidden');

  // Find objects for opening popup
  var setup = document.querySelector('.setup');
  var setupOpen = document.querySelector('.setup-open');
  var setupClose = setup.querySelector('.setup-close');

  // Find object input for banning an action to close popup by pressing ESC
  var setupUserName = document.querySelector('.setup-user-name');

  // Create function for closing popup to make the code more readability
  var onPopupEscPress = function (evt) {
    if (evt.keyCode === window.util.ESC_CODE) {
      closePopup();
    }
  };

  // Create functions to simplify the code
  var openPopup = function () {
    setup.classList.remove('hidden');
    document.addEventListener('keydown', onPopupEscPress);
  };
  var closePopup = function () {
    setup.classList.add('hidden');
    document.removeEventListener('keydown', onPopupEscPress);
  };

  // Put handler on icon to show popup
  setupOpen.addEventListener('click', function () {
    openPopup();
  });

  // Put handler on icon to hide popup
  setupClose.addEventListener('click', function () {
    closePopup();
  });

  // Put handler on icon to show popup with help keyboard
  setupOpen.addEventListener('keydown', function (evt) {
    if (evt.keyCode === window.util.ENT_CODE) {
      openPopup();
    }
  });

  // Put handler on icon to hide popup with help keyboard
  setupClose.addEventListener('keydown', function (evt) {
    if (evt.keyCode === window.util.ENT_CODE) {
      closePopup();
    }
  });

  // Ban button ESC bobing up from input
  setupUserName.addEventListener('keydown', function (evt) {
    if (evt.keyCode === window.util.ESC_CODE) {
      evt.stopPropagation();
    }
  });
})();
