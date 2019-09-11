$(document).ready(function() {
    $("p").click(function() {
        $(this).addClass("yellow");
        $(this).toggleClass("red");
        $(this).css("font-size", parseInt($(this).css("font-size")) + 1 + "px");
    })
});