$(document).ready(function() {
    $(".addFront").click(function() {
        let li = document.createElement("li");
        li.innerText = $(".input").val();
        $("ol").prepend(li);
    });
    $(".addBack").click(function() {
        let li = document.createElement("li");
        li.innerText = $(".input").val();
        $("ol").append(li);
    });
    $(".copy").click(function() {
        $("li").each(function() {
            $(this).text($(this).text() + " " + $(this).text().split(" ")[0]);
        });
    });
});