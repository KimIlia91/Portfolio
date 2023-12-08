const hamburger = document.querySelector('.hamburger'),
    menu = document.querySelector('.menu'),
    close = document.querySelector('.menu__close');

hamburger.addEventListener('click', function() {
    menu.classList.toggle('menu_active');
});

close.addEventListener('click', function() {
    menu.classList.remove('menu_active');
});