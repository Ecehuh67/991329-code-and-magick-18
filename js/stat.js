'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var GAP = 10;
var FONT = 16;
var MESSAGE_X = 125;
var MESSAGE_Y = 40;
var MARGIN = 40;
var COLUMN_WIDTH = 40;
var BAR_HEIGHT = 150;
var SPACE_BETWEEN = 50;

//Отрисовка всплывающего окна с тенью
var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

//Находим масксимальное значение очков среди игроков
var getMaxElement = function (score) {
  var maxElement = score[0];
  for (var i = 0; i < score.length; i++) {
    if (maxElement < score[i]) {
      maxElement = score[i];
    }
  }
  return Math.round(maxElement);
};



window.renderStatistics = function (ctx, names, times) {
  renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#ffffff');

  ctx.fillStyle = '#000';
  ctx.font = '16px PT Mono';

//Находим имя игрока с наибольшим количеством очков
  for (var k = 0; k < times.length; k++) {
    var numberOfWinner = k;
    if (Math.round(times[k]) === getMaxElement(times)) {
      break;
    }
  }

//Проверка кто выиграл и вывод сообщения
  if (names[numberOfWinner] === 'Вы') {
    ctx.fillText('Ура вы победили!', MESSAGE_X, MESSAGE_Y);
  } else {
    ctx.fillText('Вы проиграли! Победил(а)' + ' ' + names[numberOfWinner], MESSAGE_X, MESSAGE_Y);
  }

  ctx.fillText('Список результатов:', MESSAGE_X, MESSAGE_Y + GAP + FONT);

  var maxScore = getMaxElement(times);

  for (var i = 0; i < names.length; i++) {
    var columnHeight = Math.round(times[i] / maxScore * (BAR_HEIGHT - GAP * 2 - FONT));
    var columnX = CLOUD_X + MARGIN + (COLUMN_WIDTH + SPACE_BETWEEN) * i;
    var columnY = CLOUD_Y + CLOUD_HEIGHT - MARGIN;

    ctx.fillStyle = '#000';
    ctx.fillText(names[i], columnX, columnY);

//Задаем цвет столбцов и рисуем их
    if (names[i] === 'Вы') {
      ctx.fillStyle = 'rgba(255, 0, 0, 1)';
    } else {
      ctx.fillStyle = 'hsl(240, ' + Math.round(Math.random() * 100) + '%, 50%)';
    }
    ctx.fillRect(columnX, columnY - FONT - GAP - columnHeight, COLUMN_WIDTH, columnHeight);

//Указываем счет игрока сверху столбца
    ctx.fillStyle = '#000';
    ctx.fillText(Math.round(times[i]), columnX, columnY - FONT - GAP - columnHeight - GAP);
  }
};
