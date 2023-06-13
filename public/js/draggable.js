

$(document).ready(function() {
    $("body").bind("DOMSubtreeModified", function() {
        $(".draggable").draggable({
            handle: ".experimental-window > .title-bar",
            // i need to look more into the documentation for these
            // the issue originally i assumed to be from the iframees, but i didn't think
            // them being able to still detect keyboard and mouse eveeents would be an issue
            // oh well, i guess it was, at least this re-enables them when you stop dragging
            start: function() {
                $("iframe").css("pointer-events", "none");
            },
            stop: function() {
                $("iframe").css("pointer-events", "auto");
            }
        });

        // target all buttons with the aria label close, and when it is clicked, go to the window and hide it
        $("button").attr("aria-label", "Close").click(function() {
            $(this).parent().parent().parent().remove();
        });
    
    }); 
});
