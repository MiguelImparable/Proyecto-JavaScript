const dMenu = document.querySelector(".navbar-email");
const DesktopMenu = document.querySelector(".desktop-menu");
const mMenu = document.querySelector("img.menu");
const MobileMenu = document.querySelector(".mobile-menu");
const cMenu = document.querySelector(".imagenCarrito");
const carritoMenu = document.querySelector(".my-order-content");

dMenu.addEventListener("click", togglelogo);
mMenu.addEventListener("click", togglemenu);
cMenu.addEventListener("click", togglecarrito);
// con esta funcion yo logre hacer que al darle click se abra
// o se cierre la barra lateral
function togglelogo () {
    DesktopMenu.classList.toggle("inactive");
}

function togglemenu () {
    MobileMenu.classList.toggle("inactive");
}

function togglecarrito () {
    carritoMenu.classList.toggle("inactive");
}