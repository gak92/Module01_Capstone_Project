const hamburger = document.querySelector('#hamburger');
const mobileMenu = document.querySelector('.mobile-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    console.log('click on hamburger');

    mobileMenu.classList.toggle('active');
    console.log(mobileMenu);
});