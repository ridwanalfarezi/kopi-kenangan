// Toggle Hamburger Menu
const nav = document.querySelector('.nav-link');
const hamburgerMenu = document.querySelector('#hamburger-menu')

hamburgerMenu.addEventListener('click', () => {
    nav.classList.toggle('active');
})

// Hilangkan Nav dimanapun layar di klik
document.addEventListener('click', (e) => {
    if(!hamburgerMenu.contains(e.target) && !nav.contains(e.target)) {
        nav.classList.remove('active');
    }
})

// Transparent Nav BG
window.onscroll = () => {
    const navbar = document.querySelector('.navbar')
    const fixedNav = navbar.offsetTop;

    if (window.pageYOffset > fixedNav ) {
        navbar.classList.add('navbar-fixed');        
    } else {
        navbar.classList.remove('navbar-fixed');        
    }
}