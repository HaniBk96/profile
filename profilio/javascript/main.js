let header = document.getElementById("main-header");
let lio = document.getElementById("lio");


window.onscroll = function () {
if (window.scrollY >= 50) {
    header.classList.add("hanibknav");

} else {
    header.classList.remove("hanibknav");
}
}
