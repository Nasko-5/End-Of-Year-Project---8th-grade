var windows = null;
var amountOfWindows = 0;

// stolen from https://stackoverflow.com/a/8568191/17970489
// but i think i understand how it works kind of?
(function() {
    var highest = 1;

    $.fn.bringToTop = function() {
        this.css('z-index', ++highest); // increase highest by 1 and set the style
    };
})();

$(document).ready(function() {
    $(document).on('mousedown', '.experimental-window', function() {
      $(this).bringToTop();
    });
  });