'use strict';

var AMOUNT_OF_WIZARD = 4; // Количество магов в блоке выбора
var WIZZARD_NAMES = ['Иван', 'Хуан', 'Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон']; // Имена Магов
var WIZZARD_SECOND_NAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг']; // Фамилии магов
var COAT_COLOR = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)']; // Цвет мантии
var EYES_COLOR = ['black', 'red', 'blue', 'yellow', 'green']; // Цвет глаз


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
