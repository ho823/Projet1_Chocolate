const navHeader = document.body.querySelector('#nav_header');
const buttonNav = document.body.querySelector('#button_nav');

function dropdownMenu() {
    navHeader.classList.toggle('deployed');
};

buttonNav.addEventListener("click", dropdownMenu);