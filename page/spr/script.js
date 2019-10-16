$(document).ready(function() {
    let hasBeenRClicked = false;
    let letters = "ABCDEFGHIJKLMNOUPRSTUVWXYZ";
    letters.split("").forEach(function(elem) {
        let button = document.createElement("button");
        $(button).text(elem);
        $(button).addClass("button");
        $(button).click(function() {
            $(".nameList").html("");
            letter = $(this).text();
            $.get("imiona.txt", function(data) {
                let names = data.split("\n");
                names.sort();
                $(names).each(function(index, name) {
                    if (name[0] == letter) {
                        let li = document.createElement("li");
                        $(li).mouseenter(function() {
                            $(this).addClass("hovered");
                        })
                        $(li).mouseleave(function() {
                            $(this).removeClass("hovered");
                        });
                        $(li).on("mouseup", function(event) {
                            if (event.which == 1) {
                                $(this).toggleClass("marked");
                            }
                            else if (event.which == 3) {
                                let div = document.createElement("div");
                                $(div).text($(this).text());
                                $(div).addClass("snapped");
                                $(document).on("mousedown", function(event) {
                                    if (hasBeenRClicked && event.which == 3) {
                                        hasBeenRClicked = false;
                                        $(".snapped").remove();
                                    }
                                });
                                $("body").append(div);
                                hasBeenRClicked = true;
                            }
                        });
                        $(li).text(name);
                        $(".nameList").append(li);
                        $(li).animate({
                            left: "0px"
                        });
                    }
                })
            });
        });
        $(".buttons").append(button);
    });
    $(document).on("mousemove", function(event) {
        $(".snapped").css("left", event.pageX + 3);
        $(".snapped").css("top", event.pageY + 3);
    });
});