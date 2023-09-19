import { highestZIndex } from './zIndex.js';

// stolen from https://stackoverflow.com/a/8568191/17970489
// but i think i understand how it works kind of?
(function() {
    $.fn.bringToTop = function() {
        highestZIndex.value++;
        console.log(highestZIndex.value);
        this.css('z-index', highestZIndex); // increase highest by 1 and set the style
    };
})();

$(document).ready(function() {
    $(document).on('mousedown', '.experimental-window', function() {
      $(this).bringToTop();
    });
  });