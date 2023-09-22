    const burgerMenu = document.querySelector('.header_burger');
    const navItems = document.querySelector('.header_nav');

    burgerMenu.addEventListener('click', () => {
        navItems.classList.toggle('show-menu');
    });