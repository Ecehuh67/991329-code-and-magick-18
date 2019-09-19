'use strict';

var AMOUNT_OF_WIZZARD = 4; // Количество магов в блоке выбора
var WIZZARD_NAMES = ['Иван', 'Хуан', 'Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон']; // Имена Магов
var WIZZARD_SECOND_NAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг']; // Фамилии магов
var COAT_COLOR = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)']; // Цвет мантии
var EYES_COLOR = ['black', 'red', 'blue', 'yellow', 'green']; // Цвет глаз


// Показываем диалоговое окно выбора мага
var userDialog = document.querySelector('.setup');
userDialog.classList.remove('hidden');

document.querySelector('.setup-similar').classList.remove('hidden');

// Находим ссылки на блок маговв который будет вставлять магов из шаблона
var similatListElement = document.querySelector('.setup-similar-list');

// Находим шаблон мага
var similarWizardTemplate = document.querySelector('#similar-wizard-template')
  .content.
querySelector('.setup-similar-item');

// Генерация случайного имени и фамилии
var getRandomNumber = function (data) {
  return Math.round(Math.random() * (data.length - 1));
};

// Создание случайного персонажа и вставка его в блок
for (var i = 0; i < AMOUNT_OF_WIZZARD; i++) {

  // Копируем из шаблона все элементы
  var wizardElement = similarWizardTemplate.cloneNode(true);

  // Подстановка сгенерированных данных в блок персонажа
  wizardElement.querySelector('.setup-similar-label').textContent = WIZZARD_NAMES[getRandomNumber(WIZZARD_NAMES)] + ' ' + WIZZARD_SECOND_NAMES[getRandomNumber(WIZZARD_SECOND_NAMES)];

  // Подстановка случайного цвета мантии
  wizardElement.querySelector('.wizard-coat').setAttribute('fill', COAT_COLOR[getRandomNumber(COAT_COLOR)]);

  // Подстановка случайного цвета глаз
  wizardElement.querySelector('.wizard-eyes').setAttribute('fill', EYES_COLOR[getRandomNumber(EYES_COLOR)]);

  // Вставляет скопированные элементы в блок похожих магов
  similatListElement.appendChild(wizardElement);
}
