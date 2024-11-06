let menuButton = document.getElementById('hamburger-menu');

menuButton.addEventListener('click', () => {
    let menu = document.getElementById('menu');
    menu.classList.toggle('show-menu'); 
});

