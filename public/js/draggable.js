

$(document).ready(function() {
    $(".draggable").draggable();

    // target all buttons with the aria label close, and when it is clicked, go to the window and hide it
    $("button").attr("aria-label", "Close").click(function() {
        $(this).parent().parent().parent().remove();
    });
    
});
