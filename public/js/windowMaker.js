$(document).ready(function() {
    const $body = $('body');

    // Handle double-click event for elements with the "icon" class
    $body.on('dblclick', '.icon', function() {
        const $this = $(this);
        const iframeLink = $this.attr('iframelink');
        const windowName = $this.attr('window-name');
        const windowWidth = $this.attr('window-width');
        const windowHeight = $this.attr('window-height');
        const iconStyle = $this.attr('style');

        const windowPosX = (window.innerWidth / 2) - (parseInt(windowWidth) / 2);
        const windowPosY = (window.innerHeight / 2) - (parseInt(windowHeight) / 2);

        const windowTemplate = createWindowTemplate(windowName, windowWidth, windowHeight, iframeLink, iconStyle, windowPosX, windowPosY);

        $body.append(windowTemplate);
    });

    // Function to create the window template
    function createWindowTemplate(windowName, windowWidth, windowHeight, iframeLink, iconStyle, posX, posY) {
        return `
            <div class="window draggable" style="width: ${windowWidth}; height: ${windowHeight}; left: ${posX}px; top: ${posY}px;">
                <div class="title-bar">
                    <div class="icon-and-text">
                        <div class="icon-small" style="${iconStyle}"></div>
                        <div class="title-bar-text">${windowName}</div>
                    </div>
                    <div class="title-bar-controls">
                        <button aria-label="Close"></button>
                    </div>
                </div>
                <div class="window-body">
                    <iframe src="${iframeLink}" frameborder="0" style="padding: 0px;"></iframe>
                </div>
            </div>
        `;
    }
});