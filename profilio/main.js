let header = document.getElementById("main-header");
let lio = document.getElementById("lio");


window.onscroll = function () {
    if (window.scrollY >= 50) {
        header.classList.add("hanibknav");
        
    } else {
        header.classList.remove("hanibknav");
    }
}

let menuul = document.getElementById("menu-ul");
let fontmen = document.getElementById("font-menu");

fontmen.onclick = function() {
    menuul.classList.add("active");
    fontmen.classList.add("active");
    this.onclick = function() {
        menuul.classList.remove("active");
        fontmen.classList.remove("active");
    }
};
