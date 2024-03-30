
    //    chanig colo nav bavbar when scrole 

let header = document.getElementById("main-header");
let lio = document.getElementById("lio");
let btn = document.getElementById("top-button");

window.onscroll = function () {
    if (window.scrollY >= 200) {

        header.classList.add("hanibknav");
        btn.style.display = "block";
    } else {
        
        header.classList.remove("hanibknav");
        btn.style.display = "none";
    }
}

btn.onclick = function () {
    window.scrollTo({
        top: 0,
        behavior:"smooth",
    });
}



            //   add menu btn  
let menuul  = document.getElementById("menu-ul");
let fontmen = document.getElementById("font-menu");
let i       = document.querySelector("#font-menu i");

i.onclick = function () {
    menuul.classList.add("active");
    fontmen.classList.add("active");
    i.classList.add("active");
    this.onclick = () => {
        menuul.classList.remove("active");
        fontmen.classList.remove("active");
    };
};

        //   add typing short 

function type() {
    var typed = new Typed(".typing", {
        strings:["Freelancer","Developer","Youtuber","Bloger"],
        typeSpeed:100,
        backSpeed:60,
        loop:true,
    });
};
type();

function typet() {
    var typed = new Typed(".typing2", {
        strings:["Freelancer","Developer","Youtuber","Bloger"],
        typeSpeed:100,
        backSpeed:60,
        loop:true,
    });
};
typet();
