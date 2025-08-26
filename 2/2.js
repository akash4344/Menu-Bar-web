const toggleButton = document.getElementById('menu-toggle');
const menu = document.querySelector('.menu-items');

toggleButton.addEventListener('click', () => {
    menu.classList.toggle('show');
});
