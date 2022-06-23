// Create top bar
const topBar = document.getElementById('top-bar');
console.log(topBar);
topBar.innerHTML =`<div class="container">
<ul>
    <li><a href="https://www.facebook.com"><i class="fa-brands fa-facebook-f"></i></a></li>
    <li><a href="https://www.twitter.com"><i class="fa-brands fa-twitter"></i></a></li>
    <li><a href="#">English</a></li>
    <li><a href="#">My Page</a></li>
    <li><a href="#">Logout</a></li>
</ul>	
</div>	`;

// Create Main Menu for Desktop
const header = document.getElementById('header');
header.innerHTML = `<navbar class="navbar" id="navbar">
<div class="container">
    <a href="./index.html"><img src="./assets/images/coding_expo_logo.png" alt="Coding Expo Logo"></a>
    <ul class="nav-items">
        <li class="nav-item"><a href="./about.html">About</a></li>
        <li class="nav-item"><a href="#program">Program</a></li>
        <li class="nav-item"><a href="#speakers">Speakers</a></li>
        <li class="nav-item"><a href="#partner">Partner</a></li>
        <li><a href="#">CE Campaign</a></li>
    </ul>
</div>
</navbar>`;

// Create Menu for Mobile
const mobileMenu = document.querySelector('.mobile-menu');

mobileMenu.innerHTML = `<ul class="mobile-menu-items">
<li class="mobile-menu-item"><a href="./about.html">About</a></li>
<li class="mobile-menu-item"><a href="./index.html#program">Program</a></li>
<li class="mobile-menu-item"><a href="./index.html#speakers">Speakers</a></li>
<li class="mobile-menu-item"><a href="./index.html#partner">Partner</a></li>
<li class="mobile-menu-item"><a href="#">CE Campaign</a></li>
</ul>`;

// Mobile Menu Display Functionality
const hamburger = document.querySelector('#hamburger');

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
