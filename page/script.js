$(document).ready(function() {
    for (let x = 0; x < 50; x += 1) {
        let obj = document.createElement("div");
        obj.className = "obj";
        obj.innerHTML = x;
        $("body").append(obj);
    }
    $(".obj").click(function() {
        $(this).hide();
    });
});