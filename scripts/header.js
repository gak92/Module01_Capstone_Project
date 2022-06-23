// Mobile Menu Display
const hamburger = document.querySelector('#hamburger');
const mobileMenu = document.querySelector('.mobile-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    console.log('click on hamburger');

    mobileMenu.classList.toggle('active');
    console.log(mobileMenu);
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