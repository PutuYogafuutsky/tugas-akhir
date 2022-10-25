const menu = document.querySelector('.menu');
const navMenu = document.querySelector('.navbar');
const header = document.querySelector('#header'); 
const navbar = document.querySelector('#navbar');

menu.addEventListener('click', () => {
    console.log("test");
    navMenu.classList.toggle("show");
});

document.querySelectorAll(".navlink").forEach(n => n.addEventListener('click', () => {
    navMenu.classList.remove("show");
}));

window.onscroll = () => {
    if (window.pageYOffset >= 1) {
        header.classList.add("sticky");
        navbar.classList.add("nav");

    } else {
        header.classList.remove("sticky");
        navbar.classList.remove("nav");
    }
};