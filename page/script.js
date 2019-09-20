$(document).ready(function() {
    $("img").mouseenter(function() {
        $(this).animate({opacity: "1"}, 10);
    });
    $("img").mouseleave(function() {
        $(this).animate({opacity: "0.5"}, 10);
    });
    $("img").click(function() {
        $(this).nextSibling().fadeToggle();
    });
});