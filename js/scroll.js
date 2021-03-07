const navItems = [...document.querySelectorAll(".nav-item a")];
const projectText = document.querySelectorAll('.projText');

function scrollHandler() {
    const scrollPos = window.scrollY;
    navLinkColor(scrollPos);
    activeProject(scrollPos);
}

function navLinkColor(pos) {
    navItems.forEach(link => {
        let section = document.querySelector(link.hash);
        let parent = link.parentElement;

        if (section.offsetTop <= pos && section.offsetTop + section.offsetHeight > pos) {
            parent.classList.add("active");
        } else {
            parent.classList.remove("active");
        }
    });
}

function activeProject(pos) {
    projectText.forEach(item => {
        const bodyRect = document.body.getBoundingClientRect()
        const rect = item.getBoundingClientRect();
        const offset = rect.top - bodyRect.top;
        const windowHeight = window.innerHeight;
        let gradientAngle = (offset - pos) / 6;

        // console.log(pos);
        // console.log(windowHeight);
        // console.log(offset);

        item.style.transform = `translateY(${gradientAngle}px)`;

        if (pos + windowHeight/2 > offset) {
            console.log(`${gradientAngle} px`);
            item.classList.add('active');
        } else {
            item.classList.remove('active');
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
