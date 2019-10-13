'use strict';

(function () {
  var COAT_COLOR = [
    'rgb(101, 137, 164)',
    'rgb(241, 43, 107)',
    'rgb(146, 100, 161)',
    'rgb(56, 159, 117)',
    'rgb(215, 210, 55)',
    'rgb(0, 0, 0)'
  ]; // Цвет мантии

  var EYES_COLOR = [
    'black',
    'red',
    'blue',
    'yellow',
    'green'
  ]; // Цвет глаз

  var FIREBALL_COLOR = [
    '#ee4830',
    '#30a8ee',
    '#5ce6c0',
    '#e848d5',
    '#e6e848'
  ]; // Цвет файрбола

  var wizard = {
    onEyesChange: function () {},
    onCoatChange: function () {}
  };

  // Create function for generating random color
  var randomColor = function (data) {
    return data[window.util.getRandomData(data)];
  };

  var setupWizard = document.querySelector('.setup-wizard');
  // Change color of wizard's coat for click
  var setupWizardCoat = setupWizard.querySelector('.wizard-coat');
  // Change color of wizard's eyes for click
  var setupWizardEyes = setupWizard.querySelector('.wizard-eyes');
  // Change color of wizard's fireball for click
  var setupWizardFireball = document.querySelector('.setup-fireball-wrap');

  setupWizardCoat.addEventListener('click', function () {
    var newColor = randomColor(COAT_COLOR);
    setupWizardCoat.style.fill = newColor;
    wizard.onCoatChange(newColor);
  });

  setupWizardEyes.addEventListener('click', function () {
    var newColor = randomColor(EYES_COLOR);
    setupWizardEyes.style.fill = newColor;
    wizard.onEyesChange(newColor);
  });

  setupWizardFireball.addEventListener('click', function () {
    var newColor = randomColor(FIREBALL_COLOR);
    setupWizardFireball.style.background = newColor;

    // Pass color to hidden input for sending to server
    setupWizardFireball.querySelector('input').setAttribute('value', newColor);
  });

  window.wizard = wizard;

}());
