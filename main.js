// Declare the variables before usage
let search = document.querySelector('.search-box');
let cart = document.querySelector('.cart');
let user = document.querySelector('.user');
let navbar = document.querySelector('.navbar');
let header = document.querySelector('header');

// Search icon click event
document.querySelector('#search-icon').onclick = () => {
    search.classList.toggle('active');
    cart.classList.remove('active'); 
    user.classList.remove('active');
    navbar.classList.remove('active');
}

// Cart icon click event
document.querySelector('#cart-icon').onclick = () => {
    cart.classList.toggle('active');
    search.classList.remove('active');
    user.classList.remove('active'); 
    navbar.classList.remove('active');
}

// User icon click event
document.querySelector('#user-icon').onclick = () => {
    user.classList.toggle('active');
    search.classList.remove('active'); 
    cart.classList.remove('active');
    navbar.classList.remove('active');
}

// Menu icon click event
document.querySelector('#menu-icon').onclick = () => {
    navbar.classList.toggle('active');
    search.classList.remove('active'); 
    cart.classList.remove('active');
    user.classList.remove('active');
} 

// Scroll event to add shadow to the header when scrolled
window.addEventListener('scroll', () => {
    header.classList.toggle('shadow', window.scrollY > 0); 
});

window.onscroll = () => {
    search.classList.remove('active'); 
    cart.classList.remove('active');
    user.classList.remove('active');
    navbar.classList.remove('active');
}

//Navbar Scroll
let headers = document.querySelector('header');

window.addEventListener('scroll', () => {
    header.classList.toggle('shadow', window.scrollY > 0);
});

// Swiper setup
var swiper = new Swiper(".new-arrival", {
    spaceBetween: 20,
    loop: true,
    autoplay: {
      delay: 5500,
      disableOnInteraction: false,
    },
    centeredSlides: true,
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        568: {
            slidesPerView: 2,
        },
        768: {
            slidesPerView: 2,
        },
        1020: {
            slidesPerView: 3,
        },
    },
});
