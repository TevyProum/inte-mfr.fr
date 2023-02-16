const body = document.querySelector("body");
const header = document.querySelector("header");
const burger = document.querySelector(".burger");
const headerToggle = document.querySelector(".header__toggle");
const headerTop = document.querySelector(".header__top");
const headerBottom = document.querySelector(".header__bottom");
const headerLink = document.querySelector(".parent");

headerLink.onclick = () => {
    header.classList.toggle("-background");
    headerLink.classList.toggle("opened");
}

burger.onclick = () => {
    body.classList.toggle("overflow");
    header.classList.toggle("fixed");
    headerToggle.classList.toggle("-display");
    headerBottom.classList.toggle("-display");
    headerTop.classList.toggle("-display");
    burger.classList.toggle("-closed");
}

// Ferme le menu desktop si clic en dehors du header
document.onclick = (event) => {
    if (!event.target.closest("header")) {
        header.classList.remove("-background");
        headerLink.classList.remove("opened");
    }
}

// Ouvre tab quand clic sur submenu "Comment trouver une formation" ou "Secteurs de formation"
var rootURL = window.location.protocol + "//" + window.location.host;
var currentLink = window.location.href;

if (currentLink === rootURL+"/presentation.html#comment-trouver-formation") {
    $('.tab-filter').removeClass('active');
    $('[data-tab="tab-2"]').addClass('active');
    $('.tab-content').removeClass('current');
    $('#tab-2').addClass('current');
    $('.subtitle-content').removeClass('current');
    $('#subtitle-2').addClass('current');
} 
else if (currentLink === rootURL+"/presentation.html#secteurs-formation") {
    $('.tab-filter').removeClass('active');
    $('[data-tab="tab-3"]').addClass('active');
    $('.tab-content').removeClass('current');
    $('#tab-3').addClass('current');
    $('.subtitle-content').removeClass('current');
    $('#subtitle-3').addClass('current');
}

// Ferme le menu mobile quand clic sur submenu2 ou submenu 3
const submenu2 = document.querySelector(".submenu2");
submenu2.onclick = () => {
    body.classList.remove("overflow");
    header.classList.remove("fixed");
    headerToggle.classList.remove("-display");
    headerBottom.classList.remove("-display");
    headerTop.classList.remove("-display");
    burger.classList.remove("-closed");
}

const submenu3 = document.querySelector(".submenu3");
submenu3.onclick = () => {
    body.classList.remove("overflow");
    header.classList.remove("fixed");
    headerToggle.classList.remove("-display");
    headerBottom.classList.remove("-display");
    headerTop.classList.remove("-display");
    burger.classList.remove("-closed");
}