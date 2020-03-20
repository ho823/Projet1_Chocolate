const navHeader = document.body.querySelector('#nav_header');
const navBurger = document.body.querySelector('#burger');

function dropdownMenu() {
    navHeader.classList.toggle('deployed');
};

navBurger.addEventListener("click", dropdownMenu);

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

//menu burger
const burgerCross = document.querySelector('.menu-toggle');

burgerCross.addEventListener('click', () => {
    burgerCross.classList.toggle('burgerStyle');
})