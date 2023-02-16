const home = document.querySelector(".home");
if (home) {
    gsap.from(".home header", { opacity: 0, y: -30, duration: 1.5, delay: 0.2});
    gsap.from(".home .hero .image", { opacity: 0, y: -45, duration: 1.4, delay: 0.25});
    gsap.from(".home .hero .container", { opacity: 0, y: -35, duration: 2, delay: 0.2});
    gsap.from(".home .hero .scroll-btn", { opacity: 0, y: -150, duration: 2.5, delay: 0.2});
    gsap.to(".home .hero .first-plan", { scrollTrigger: {scrub: 4}, y: 180, scale: 1.1})
} 

const secondary = document.querySelector(".-secondary");
if (secondary) {
    gsap.from(".-secondary .image", { scale: 1.1, duration: 8, delay: 0.5});
} 

const tabs = document.querySelector(".-tabs");
if (tabs) {
    gsap.from(".-tabs .image", { scale: 1.1, duration: 8, delay: 0.5});
} 

const backgroundBloc = document.querySelector(".background-bloc");
if (backgroundBloc) {
    var tl = gsap.timeline({repeat: -1, repeatDelay: 0});
    tl.to(".background-bloc img", {y: 0, duration: 0});
    tl.to(".background-bloc img", {y: 30, duration: 4});
    tl.to(".background-bloc img", {y: 0, duration: 4});
} 

const about = document.querySelector(".about");
if (about) {
    gsap.from(".about .owl-carousel", { scrollTrigger: ".about", opacity: 0, y: 100, duration: 1, delay: 0.5});
} 

const contactBloc = document.querySelector(".contact-bloc");
if (contactBloc) {
    gsap.from(".contact-bloc .container", { scrollTrigger: ".contact-bloc", opacity: 1, y: -100, duration: 3});
} 
