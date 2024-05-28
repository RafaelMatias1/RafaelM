document.getElementById('botao').addEventListener('click', redirectToLinkedIn);

function toggleMenu() {
    const menu = document.querySelector('.hamburger-menu');
    const overlayMenu = document.getElementById('overlay-menu');
    menu.classList.toggle('active');
    overlayMenu.style.display = overlayMenu.style.display === 'block' ? 'none' : 'block';
}

function redirectToLinkedIn() {
    window.location.href = 'https://www.linkedin.com/in/rafael-matias-schimidt-3200b424a/';
}
