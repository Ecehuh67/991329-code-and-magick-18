'use strict';

(function () {

  // Create a function for sending data to the server
  var save = function (data, onLoad, onError) {
    var url = 'https://js.dump.academy/code-and-magick';
    var xhr = new XMLHttpRequest();
    xhr.responseType = 'json';

    xhr.addEventListener('load', function () {
      if (xhr.status === 200) {
        onLoad(xhr.response);
      } else {
        onError('Что-то пошло не так - ' + xhr.status + xhr.statusText);
      }
    });

    xhr.open('POST', url);
    xhr.send(data);
  };

  // Create a function for getting data to the server
  var load = function (onLoad, onError) {
    var url = 'https://js.dump.academy/code-and-magick/data';
    var xhr = new XMLHttpRequest();
    xhr.responseType = 'json';

    xhr.open('GET', url);

    xhr. addEventListener('load', function () {
      if (xhr.status === 200) {
        onLoad(xhr.response);
      } else {
        onError('Статус ответа: ' + xhr.status + xhr.statusText);
      }
    });

    xhr.send();
  };

  window.backend = {
    save: save,
    load: load
  };

})();
