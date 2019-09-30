// File wizard.js
'use strict';

(function() {
  var AMOUNT_OF_WIZARD = 4; // Количество магов в блоке выбора
  var WIZZARD_NAMES = ['Иван', 'Хуан', 'Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон']; // Имена Магов
  var WIZZARD_SECOND_NAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг']; // Фамилии магов
  var COAT_COLOR = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)']; // Цвет мантии
  var EYES_COLOR = ['black', 'red', 'blue', 'yellow', 'green']; // Цвет глаз
  var FIREBALL_COLOR = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848']; // Цвет файрбола

  // Находим ссылки на блок маговв который будет вставлять магов из шаблона
  var similatListElement = document.querySelector('.setup-similar-list');

  // Находим шаблон мага
  var similarWizardTemplate = document.querySelector('#similar-wizard-template')
    .content.
  querySelector('.setup-similar-item');

  // Шаблон массива с магами
  var getWizards = function (amount) {
    var wizardsData = [];
    for (var j = 0; j < amount; j++) {
      var characteristics = {
        name: WIZZARD_NAMES[window.util.getRandomData(WIZZARD_NAMES)] + ' ' + WIZZARD_SECOND_NAMES[window.util.getRandomData(WIZZARD_SECOND_NAMES)],
        coatColor: COAT_COLOR[window.util.getRandomData(COAT_COLOR)],
        eyesColor: EYES_COLOR[window.util.getRandomData(EYES_COLOR)]
      };
      wizardsData[j] = characteristics;
    }
    return wizardsData;
  };

  var wizards = getWizards(AMOUNT_OF_WIZARD);

  // Создаем мага согласно шаблона
  var renderWizard = function (wizard) {
    var wizardElement = similarWizardTemplate.cloneNode(true);

    wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
    wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
    wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;

    return wizardElement;
  };

  // Создаем буфер куда будем временно копировать магов
  var fragment = document.createDocumentFragment();

  // Копируем магов в буфер
  for (var i = 0; i < wizards.length; i++) {
    fragment.appendChild(renderWizard(wizards[i]));
  }

  // Переносим содержимое буфера в разметку
  similatListElement.appendChild(fragment);

  // Change color of wizard's coat for click
  var setupWizardCoat = document.querySelector('.setup-wizard').querySelector('.wizard-coat');

  // Create function for generating random color
  var randomColor = function (data) {
    return data[window.util.getRandomData(data)];
  };

  setupWizardCoat.addEventListener('click', function () {
    setupWizardCoat.style.fill = randomColor(COAT_COLOR);
  });

  // Change color of wizard's eyes for click
  var setupWizardEyes = document.querySelector('.setup-wizard').querySelector('.wizard-eyes');

  setupWizardEyes.addEventListener('click', function () {
    setupWizardEyes.style.fill = randomColor(EYES_COLOR);
  });

  // Change color of wizard's fireball for click
  var setupWizardFireball = document.querySelector('.setup-fireball-wrap');

  setupWizardFireball.addEventListener('click', function () {
    var fireballColor = randomColor(FIREBALL_COLOR);
    setupWizardFireball.style.background = fireballColor;

    // Pass color to hidden input for sending to server
    setupWizardFireball.querySelector('input').setAttribute('value', fireballColor);
  });
})();
