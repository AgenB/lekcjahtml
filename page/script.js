$(document).ready(function() {
    $(".input").change(function() {
        $.get("test.php", {fruit: $(".input").val()}, function(data) {
            $(".result").attr("src", data);
        });
    });
});