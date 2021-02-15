const navItems = [...document.querySelectorAll(".nav-item a")];

function scrollHandler() {
    navLinkColor();
    checkBar();
}

function checkBar() {

}

function navLinkColor() {
    const scrollPos = window.scrollY;
    navItems.forEach(link => {
        let section = document.querySelector(link.hash);
        let parent = link.parentElement;

        if (section.offsetTop <= scrollPos && section.offsetTop + section.offsetHeight > scrollPos) {
            parent.classList.add("active");
        } else {
            parent.classList.remove("active");
        }
    });
}

window.addEventListener('scroll', scrollHandler);
window.addEventListener('load', scrollHandler);