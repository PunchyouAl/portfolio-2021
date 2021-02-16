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

function SmoothVerticalScrolling(e, time, where) {
    var eTop = e.getBoundingClientRect().top;
    var eAmt = eTop / 100;
    var curTime = 0;
    while (curTime <= time) {
        window.setTimeout(SVS_B, curTime, eAmt, where);
        curTime += time / 100;
    }
}

function SVS_B(eAmt, where) {
    if(where == "center" || where == "")
        window.scrollBy(0, eAmt / 2);
    if (where == "top")
        window.scrollBy(0, eAmt);
}

window.addEventListener('scroll', scrollHandler);
window.addEventListener('load', scrollHandler);