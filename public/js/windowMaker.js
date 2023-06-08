var windowTemplate = ""

$("document").ready(function() {
    // detect double click for every element with the icon class
    $(".icon").dblclick(function() {
        windowTemplate = "<div class=\"window draggable ui-draggable\" style=\"width: 300px\"> <div class=\"title-bar\" id=\"\"> <div class=\"title-bar-text\">Another (hopefully) draggable window!!!</div> <div class=\"title-bar-controls\"> <button aria-label=\"Close\"></button> </div> </div> <div class=\"window-body\"> <iframe src=\"" + $(this).attr("iframelink") + "\" frameborder=\"0\" style=\"padding:0px;\"></iframe> </div> </div>"
        
        $("body").append(windowTemplate)
    });
});