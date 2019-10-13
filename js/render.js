'use strict';

(function () {
  // Находим шаблон мага
  var similarWizardTemplate = document.querySelector('#similar-wizard-template')
    .content.
  querySelector('.setup-similar-item');

  // Находим ссылки на блок маговв который будет вставлять магов из шаблона
  var similatListElement = document.querySelector('.setup-similar-list');

  // Создаем мага согласно шаблона
  var renderWizard = function (wizard) {
    var element = similarWizardTemplate.cloneNode(true);

    var wizardElement = element.querySelector('.wizard');

    element.querySelector('.setup-similar-label').textContent = wizard.name;
    wizardElement.querySelector('.wizard-coat').style.fill = wizard.colorCoat;
    wizardElement.querySelector('.wizard-eyes').style.fill = wizard.colorEyes;

    return element;
  };

  var render = function (data) {
    // Создаем буфер куда будем временно копировать магов
    var fragment = document.createDocumentFragment();

    // Копируем магов в буфер
    var amountOfWizard = data.length > 4 ? 4 : data.length;
    similatListElement.innerHTML = '';
    for (var i = 0; i < amountOfWizard; i++) {
      fragment.appendChild(renderWizard(data[i]));
    }

    // Переносим содержимое буфера в разметку
    similatListElement.appendChild(fragment);

    window.dialog.userDialog.querySelector('.setup-similar').classList.remove('hidden');
  };

  window.render = {
    render: render
  };

}());
