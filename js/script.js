// NAV SCROLL

const nav = document.querySelector('#nav');
const hero = document.querySelector('#hero');
let height = hero.getBoundingClientRect();
const projects = document.querySelector('#projects');

function stickNav() {
    // console.log(`${height.height} + ${window.scrollY}`);
    height = hero.getBoundingClientRect();
    if (height.height < window.scrollY) {
        nav.classList.add("fixed");
        projects.classList.add("navActive");
    } else {
        nav.classList.remove("fixed");
        projects.classList.remove("navActive");
    }
}

window.addEventListener('scroll', stickNav);
window.addEventListener('load', stickNav);