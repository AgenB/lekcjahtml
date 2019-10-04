$(document).ready(function() {
    $(document).mousemove(function(e) {
        $(".parent").css({"left": e.pageX, "top": e.pageY});
    });
    $(document).click(function() {
        $(".xhair").animate({
            left: "-60px",
            top: "-60px",
            height: "120px",
            width: "120px"
        });
        $(".xhair").animate({
            left: "-50px",
            top: "-50px",
            height: "100px",
            width: "100px"
        });
    });
});