import { createWindowTemplate } from './windowMaker.js'

$(document).ready(function() {
    const $body = $('body');

    // Handle double-click event for elements with the "icon" class
    $body.on('click', '.icon', function() {
        const $this = $(this);
        const iframeLink = $this.attr('iframelink');
        const windowName = $this.attr('window-name');
        const windowWidth = $this.attr('window-width');
        const windowHeight = $this.attr('window-height');
        const iconStyle = $this.attr('style');

        const windowPosX = (window.innerWidth / 2) - (parseInt(windowWidth) / 2);
        const windowPosY = (window.innerHeight / 2) - (parseInt(windowHeight) / 2);

        console.log("from programOpener")
        createWindowTemplate(windowName, windowWidth, windowHeight, iframeLink, iconStyle, windowPosX, windowPosY, $body);

        //$body.append(windowTemplate);
    });
});

