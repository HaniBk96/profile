let header = document.getElementById("main-header");
let lio = document.getElementById("lio");


window.onscroll = function () {
if (window.scrollY >= 50) {
    header.style.backgroundColor = "red";
    lio.style.Color = "white";
} else {
    header.style.backgroundColor = "#ffffff00";
}
}
