const menuIcon = document.getElementById('hamburger-menu-icon');
const navbar = document.getElementById('hamburger-bar');
let isOpen = false;

document.addEventListener('DOMContentLoaded', function () {

    menuIcon.addEventListener('click', function (event) {
        event.stopPropagation(); // Prevent the click event from reaching the document
        isOpen = !isOpen;
        navbar.classList.toggle('show');
        console.log('hamburger clicked');
    });

    document.addEventListener('click', function (event) {
        if (!navbar.contains(event.target)) closeNavbar();
    });
});

function closeNavbar() {
    if (isOpen) {
        navbar.classList.remove('show');
        isOpen = false;
    }
}