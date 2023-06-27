// Function to create the window template
export function createWindowTemplate(windowName, windowWidth, windowHeight, iframeLink, iconStyle, posX, posY) {
    return `
        <div style="width:${windowWidth}; left: ${posX}px; top: ${posY}px" class="draggable experimental-window">
            <div class="title-bar">
                <div class="icon-and-text">
                    <div class="icon-small" style="${iconStyle}"></div>
                    <div class="title-bar-text">${windowName}</div>
                </div>
                    
                <div class="title-bar-controls">
                    <button aria-label="Close"></button>
                </div>
            </div>
            <div class="window">
                <iframe class="window-iframe" style="height: ${windowHeight};" src="${iframeLink}" frameborder="0"></iframe>
            </div>
    </div>
 `;
}