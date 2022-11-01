
const nav = document.querySelector(".nav_header");
window.addEventListener("scroll", () => {
  if (window.scrollY > 350) {
    nav.classList.add("scroll");
  } else {
    nav.classList.remove("scroll");
  }
});


window.onload = () => {
  window.addEventListener("scroll", () => {
    let hauteur = document.documentElement.scrollHeight - window.innerHeight;
    let position = window.scrollY;
    let largeur = document.documentElement.clientWidth;

    let barre = (position / hauteur) * largeur;

    document.getElementById("barre").style.width = barre + "px";
  });
};

let toggle = document.querySelector(".toggle");
let body = document.querySelector("body");

toggle.addEventListener("click", function () {
  body.classList.toggle("open");
});