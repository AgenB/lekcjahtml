$(document).ready(function() {
    $("img").mouseenter(function() {
        $(this).animate({opacity: "1"}, 10);
        $(this).animate(
            { top: "200px", left: "200px",deg: 36000 },
            {
            duration: 1200,
            step: function(now) {
                $(this).css({ transform: 'rotate(' + now + 'deg)' });
            }
            }
        );
    });
    $("img").mouseleave(function() {
        $(this).animate({opacity: "0.5"}, 10);
        $(this).animate(
            { top: 0, left: 0, deg: 0 },
            {
            duration: 1200,
            step: function(now) {
                $(this).css({ transform: 'rotate(' + now + 'deg)' });
            }
            }
        );
    });
    $("img").click(function() {
        $(this).nextSibling().fadeToggle();
    });
});