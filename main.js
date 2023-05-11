let menu =document.querySelector('.menu-icon');
let navbar =document.querySelector('.navbar');

menu.onclick = () => {
    navbar.classList.toggle('open-menu');
    menu.classList.toggle("move")
};
window.onscroll = () => {
    navbar.classList.remove('open-menu');
    menu.classList.remove("move")
};
// header background change on scroll 
let header =document.querySelector('header');
window.addEventListener('scroll', () =>{
    header.classList.toggle("header-active", window.scrollY > 0);
} );
// scroll top 
let scrollTop =document.querySelector('.scroll-top');
window.addEventListener('scroll', () =>{
    scrollTop.classList.toggle("scroll-active", window.scrollY > 0);
} );