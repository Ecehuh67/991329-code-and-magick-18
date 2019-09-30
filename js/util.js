// File util.js
'use strict';

(function () {
  window.util = {
    // Находим масксимальное значение очков среди игроков
    getMaxElement: function (score) {
      var maxElement = score[0];
      for (var i = 0; i < score.length; i++) {
        if (maxElement < score[i]) {
          maxElement = score[i];
        }
      }
      return Math.round(maxElement);
    },

    ESC_CODE: 27, // Number of button ESCAPE

    ENT_CODE: 13, // Number of button ENTER

    // Генерация случайного числа
    getRandomData: function (data) {
      return Math.round(Math.random() * (data.length - 1));
    }
  };
})();
