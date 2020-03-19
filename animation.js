const navHeader = document.body.querySelector('#nav_header');
const buttonNav = document.body.querySelector('#button_nav');

function dropdownMenu() {
    navHeader.classList.toggle('deployed');
};

buttonNav.addEventListener("click", dropdownMenu);

//changement fond
function switchTheme(event) {
    if (event.target.checked) {
        document.documentElement.setAttribute('data-theme', 'dark');
    } else {
        document.documentElement.setAttribute('data-theme', 'light');
    }
}

const toggler = document.querySelector('#toggler');
toggler.addEventListener('change', switchTheme, false);