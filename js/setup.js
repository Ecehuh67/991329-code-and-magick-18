'use strict';

var AMOUNT_OF_WIZARD = 4; // Количество магов в блоке выбора
var WIZZARD_NAMES = ['Иван', 'Хуан', 'Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон']; // Имена Магов
var WIZZARD_SECOND_NAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг']; // Фамилии магов
var COAT_COLOR = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)']; // Цвет мантии
var EYES_COLOR = ['black', 'red', 'blue', 'yellow', 'green']; // Цвет глаз
var FIREBALL_COLOR = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848']; // Цвет файрбола
var ESC_CODE = 27; // Number of button ESCAPE
var ENT_CODE = 13; // Number of button ENTER

// Показываем диалоговое окно выбора мага
var userDialog = document.querySelector('.setup');
userDialog.classList.remove('hidden');

// Находим ссылки на блок маговв который будет вставлять магов из шаблона
var similatListElement = document.querySelector('.setup-similar-list');

// Находим шаблон мага
var similarWizardTemplate = document.querySelector('#similar-wizard-template')
  .content.
querySelector('.setup-similar-item');

// Генерация случайного числа
var getRandomData = function (data) {
  return Math.round(Math.random() * (data.length - 1));
};

// Шаблон массива с магами
var getWizards = function (amount) {
  var wizardsData = [];
  for (var j = 0; j < amount; j++) {
    var characteristics = {
      name: WIZZARD_NAMES[getRandomData(WIZZARD_NAMES)] + ' ' + WIZZARD_SECOND_NAMES[getRandomData(WIZZARD_SECOND_NAMES)],
      coatColor: COAT_COLOR[getRandomData(COAT_COLOR)],
      eyesColor: EYES_COLOR[getRandomData(EYES_COLOR)]
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

userDialog.querySelector('.setup-similar').classList.remove('hidden');

// Find objects for opening popup
var setup = document.querySelector('.setup');
var setupOpen = document.querySelector('.setup-open');
var setupClose = setup.querySelector('.setup-close');

// Find object input for banning an action to close popup by pressing ESC
var setupUserName = document.querySelector('.setup-user-name');

// Create function for closing popup to make the code more readability
var onPopupEscPress = function (evt) {
  if (evt.keyCode === ESC_CODE) {
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
  if (evt.keyCode === ENT_CODE) {
    openPopup();
  }
});

// Put handler on icon to hide popup with help keyboard
setupClose.addEventListener('keydown', function (evt) {
  if (evt.keyCode === ENT_CODE) {
    closePopup();
  }
});

// Ban button ESC bobing up from input
setupUserName.addEventListener('keydown', function (evt) {
  if (evt.keyCode === ESC_CODE) {
    evt.stopPropagation();
  }
});

// Change color of wizard's coat for click
var setupWizardCoat = document.querySelector('.setup-wizard').querySelector('.wizard-coat');

setupWizardCoat.addEventListener('click', function () {
  setupWizardCoat.style.fill = '' + COAT_COLOR[getRandomData(COAT_COLOR)];
});

// Change color of wizard's eyes for click
var setupWizardEyes = document.querySelector('.setup-wizard').querySelector('.wizard-eyes');

setupWizardEyes.addEventListener('click', function () {
  setupWizardEyes.style.fill = '' + EYES_COLOR[getRandomData(EYES_COLOR)];
});

// Change color of wizard's fireball for click
var setupWizardFireball = document.querySelector('.setup-fireball-wrap');

setupWizardFireball.addEventListener('click', function () {
  setupWizardFireball.style.background = '' + FIREBALL_COLOR[getRandomData(FIREBALL_COLOR)];
  setupWizardFireball.querySelector('input').setAttribute('value', FIREBALL_COLOR[getRandomData(FIREBALL_COLOR)]);
});
