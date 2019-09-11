$(document).ready(function() {
    $("p").click(function() {
        if ($(this).css("background-color") == "rgb(255, 0, 0)") {
            $(this).css("background-color", "yellow");
        }
        else {
            $(this).css("background-color", "red");
        }
        $(this).css("font-size", parseInt($(this).css("font-size")) + 1 + "px");
    })
});