

$(document).ready(function() {
    $("body").bind("DOMSubtreeModified", function() {
        $(".draggable").draggable({
            handle: ".experimental-window > .title-bar",
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
