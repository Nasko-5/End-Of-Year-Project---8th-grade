var windowTemplate = ""

$("document").ready(function() {
    // detect double click for every element with the icon class
    $(".icon").dblclick(function() {
        var iframelink =  $(this).attr("iframelink");
        var windowname = $(this).attr("window-name");

        var windowwidth = $(this).attr("window-width");
        var windowheight = $(this).attr("window-height");

        windowTemplate = "<div class=\"window draggable ui-draggable\" style=\" width: " + windowwidth + " ;height: " + windowheight + "\"> <div class=\"title-bar\" id=\"\"> <div class=\"title-bar-text\">" + windowname + "</div> <div class=\"title-bar-controls\"> <button aria-label=\"Close\"></button> </div> </div> <div class=\"window-body\"> <iframe src=\"" + iframelink + "\" frameborder=\"0\" style=\"padding:0px;\"></iframe> </div> </div>"
        
        $("body").append(windowTemplate)
    });
});