$(document).ready(function() {
    for (let i = 1; i < 5; i++) {
        let para = document.createElement("p");
        let secretSpan = document.createElement("span");
        let numberSpan = document.createElement("span");
        let restSpan = document.createElement("span");
        let dotSpan = document.createElement("span");
        let fwordSpan = document.createElement("span");
        let textSpan = document.createElement("span");

        secretSpan.innerText = "Ukryty tekst nr ";
        numberSpan.innerText = i;
        dotSpan.innerText = ". ";
        fwordSpan.innerText = "Lorem";
        textSpan.innerText = " ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";

        secretSpan.classList.add("hidden");

        restSpan.appendChild(dotSpan);
        restSpan.appendChild(fwordSpan);
        restSpan.appendChild(textSpan);
        para.appendChild(secretSpan);
        para.appendChild(numberSpan);
        para.appendChild(restSpan);

        document.querySelector(".content").appendChild(para);
        $(para).attr("isCollapsed", false);

        $(fwordSpan).click(function() {
            if ($(this).parent().parent().css("color") == "rgb(0, 0, 0)") {
                $(this).parent().parent().css("color", document.querySelector(".colorInput").value);
            }
            else {
                $(this).parent().parent().css("color", "black");
            }
        });
        $(para).dblclick(function() {
            $(secretSpan).toggleClass("hidden");
            $(restSpan).toggleClass("hidden")
        });
    }
});