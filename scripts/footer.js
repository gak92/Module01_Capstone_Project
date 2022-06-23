const partners = document.getElementById('partner');
const footer = document.getElementById('footer');

partners.innerHTML = `<div class="container">
<h2>Partners</h2>
<hr class="orange-line">
<div class="partner-boxes">
    <div class="partner-box"><i class="fa-brands fa-salesforce fa-2xl"></i></div>
    <div class="partner-box"><i class="fa-brands fa-google fa-2xl"></i></div>
    <div class="partner-box"><i class="fa-brands fa-microsoft fa-2xl"></i></div>
    <div class="partner-box"><i class="fa-brands fa-facebook fa-2xl"></i></div>
    <div class="partner-box"><i class="fa-brands fa-amazon fa-2xl"></i></div>
</div>
</div>`;

footer.innerHTML = `<div class="container">
<div class="footer-box">
    <div class="left">
        Coding Expo Korea
    </div>
    <div class="right">
        2022 Coding Expo Korea
        Some Rights Reserved
    </div>
</div>
</div>`;
