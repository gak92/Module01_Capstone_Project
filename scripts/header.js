// Mobile Menu Display Functionality
const hamburger = document.querySelector('#hamburger');
const mobileMenu = document.querySelector('.mobile-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    mobileMenu.classList.toggle('active');
});

const mobileMenuItems = document.getElementsByClassName('mobile-menu-item');

Array.from(mobileMenuItems).forEach((item) => {
    item.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        mobileMenu.classList.toggle('active');
    });
});


// Make the main menu bar fixed when scrolling
const navBar = document.getElementById('navbar');
let sticky = navBar.offsetTop;

window.onscroll = function() {
    stickyNavBar();
};

function stickyNavBar() {
    if (window.pageYOffset >= sticky) {
        navBar.classList.add("sticky")
    } else {
        navBar.classList.remove("sticky");
    }
}