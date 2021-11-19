$(document).ready(function() {
    $('.header__burger').click(function(event) {
        $('.header__burger,.cd-accordion-menu').toggleClass('active');
        $('body').toggleClass('lock');
    })

    $('.sublink').click(function(event) {
       $('.has-sub').toggleClass('visible'); 
    })
})


const iconMenu = document.querySelector('.header__burger');
const menuBody = document.querySelector('.cd-accordion-menu');
if (iconMenu) {
    iconMenu.addEventListener("click", function(e) {
        document.body.classList.toggle('_lock');
        iconMenu.classList.toggle('_active');
        menuBody.classList.toggle('_active');
    });
}