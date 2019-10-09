$(document).ready(function() {
    $(".button").click(function() {
        $.get("test.php", {number: $(".input").val()}, function(data) {
            $(".result").text(data);
        });
    });
});