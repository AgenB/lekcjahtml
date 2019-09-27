$(document).ready(function() {
    $(".list").on({
        mouseenter: function() {
            $(this).addClass("sharp");
        },
        mouseleave: function() {
            $(this).removeClass("sharp");
        }
    }, "img")
    $(".addPic").click(function() {
        let pic = document.createElement("img");
        pic.src = $(".input").val();
        // $(pic).mouseenter(function() {
        //     $(this).addClass("sharp");
        // });
        // $(pic).mouseleave(function() {
        //     $(this).removeClass("sharp");
        // });
        
        $(".list").append(pic);
    });
});