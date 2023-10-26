const menuIcon = document.getElementById('menu-icon');
const menuOptions = document.querySelector('.menu-options');

menuIcon.addEventListener('click', () => {
    menuOptions.style.display = menuOptions.style.display === 'none' ? 'block' : 'none';
});
