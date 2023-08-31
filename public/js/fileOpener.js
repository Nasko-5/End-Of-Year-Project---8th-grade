import { createWindowTemplate } from './windowMaker.js';

$(document).ready(function() {
  $('body').bind('DOMSubtreeModified', function () {
    const $body = $('body');

    $('iframe').on("load", function () {
      var hoo = $(this).contents().find('.file-selector');

      $(hoo).unbind().on('dbclick', function () {
        const file = $(this);
        const mediaLink = file.attr('media-link');
        const windowName = file.attr('windowName');
        const fileType = file.attr('fileType');
        const windowWidth = "400px";
        const windowHeight = "500px";

        var iconStyle = '';
        if (fileType === "image") {
          iconStyle = 'background-image: url("/images/icons/paint_file-0.png")';
        } else {
          iconStyle = 'background-image: url("/images/icons/file_lines-0.png")';
        }

        const iframeLink = '/mediaview' + encodeURIComponent('?type=' + fileType + '&?content=' + mediaLink);

        const windowPosX = (window.innerWidth / 2) - (parseInt(windowWidth) / 2);
        const windowPosY = (window.innerHeight / 2) - (parseInt(windowHeight) / 2);

        console.log("from fileOpener");
        createWindowTemplate(windowName, windowWidth, windowHeight, iframeLink, iconStyle, windowPosX, windowPosY, $body);

        //$body.append(windowTemplate);
      });
    });
  });
});
