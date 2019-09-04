const text = document.querySelector(".text");
const btnShow = document.querySelector(".show");
const btnHide = document.querySelector(".hide");

btnShow.addEventListener("click", function() {
    text.style.display = "block";
});
btnHide.addEventListener("click", function() {
    text.style.display = "none";
});