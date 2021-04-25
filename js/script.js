// NAV SCROLL

const body = document.querySelector('body');
const nav = document.querySelector('#nav');
const hero = document.querySelector('#hero');
const projects = document.querySelector('#projects');
const projectPreviewButton = projects.querySelectorAll('.btn');
const modal = document.querySelector('.modal');
const modalContent = modal.querySelector('.modal-content');
const backdrop = document.querySelector('.modal-backdrop');
const closeButton = modal.querySelector('.close');
const carousel = document.querySelector('.main-carousel');
const yearFooter = document.querySelector('#currentYear');
const projectTextOuter = document.querySelectorAll('.projTextOuter');


let height = hero.getBoundingClientRect();

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

function handleModal() {
    const dataset = this.dataset.number;
    fetch("./js/projects.json")
        .then(response => response.json())
        .then(data => fillModal(data.projects[dataset]))
}

function fillModal(data) {
    let i;
    const title = data.name;
    const subtitle = data.subtitle;
    const imgs = data.images;
    const desc = data.description;
    const link = data.link;
    
    const header = modal.querySelector('.modalHead');
    const sub = modal.querySelector('.modalSub');
    const text = modal.querySelector('.modalDesc');
    const buttonLink = modal.querySelector('.link');

    amendImgHolderLength(imgs);

    header.innerHTML = title;
    sub.innerHTML = subtitle;
    text.innerHTML = desc;

    console.log(link);

    if (link == "none") {
        buttonLink.classList.add("hidden");
    } else {
        buttonLink.classList.remove("hidden");
        buttonLink.href = link;
    }

    openModal();
}

function amendImgHolderLength(imgs) {

    const imgHolders = carousel.querySelectorAll('.carousel-cell');

    if (imgHolders.length > imgs.length) {
        // console.log(imgHolders);
        // console.log(imgHolders.length);
        // console.log(imgs.length);
        // console.log("removal");
        for (i = imgHolders.length - 1; i > imgs.length - 1; i--) {
            flkty.remove(imgHolders[i]);
        }
        
    } else if (imgHolders.length < imgs.length) {
        // console.log(imgHolders);
        // console.log(imgHolders.length);
        // console.log(imgs.length);
        // console.log("addition");
        for (i = imgHolders.length; i < imgs.length; i++) {
            const imgNode = document.createElement('img');
            imgNode.className = 'carousel-cell';
            flkty.insert( imgNode );
        }
    }

    applyImgSrc(imgs);
}

function applyImgSrc(imgs) {

    const imgHolders = carousel.querySelectorAll('.carousel-cell');

    for (i = 0; i < imgs.length; i++) {
        imgHolders[i].src = imgs[i];
    }
}

function openModal() {

    backdrop.style.opacity = 0.7;
    backdrop.style.display = "block";
    modal.style.pointerEvents = "auto";
    modal.style.opacity = 1;
    modal.style.pointerEvents = "auto";
    modalContent.style.pointerEvents = "auto";
    modal.classList.add('show');
    toggleScrollable();

}

function closeModal() {

    backdrop.style.opacity = 0;
    backdrop.style.pointerEvents = "none";
    modal.style.opacity = 0;
    modal.style.pointerEvents = "none";
    modalContent.style.pointerEvents = "none";
    modal.classList.remove('show');
    toggleScrollable()

}

function toggleScrollable() {
    body.classList.toggle('modalOpen');
}

function hoverProject() {
    this.classList.add('hovering');
}

function unhoverProject() {
    this.classList.remove('hovering');
}

function setYear() {
    const date = new Date();
    const year = date.getFullYear();
    yearFooter.innerHTML = year;
}

function preloadImages()
{
    // const dataset = this.dataset.number;
    fetch("./js/projects.json")
        .then(response => response.json())
        .then(data => data.projects.forEach(
            item => item.forEach( imgStr => {
                const img=new Image();
                img.src=imgStr;
                console.log(img);
            }
            )
        ))

}

window.addEventListener('scroll', stickNav);
window.addEventListener('load', stickNav);
window.addEventListener('load', setYear);
window.addEventListener('load', preloadImages);
projectPreviewButton.forEach(btn => {
    btn.addEventListener('click', handleModal)
});
projectTextOuter.forEach(btn => {
    btn.addEventListener('mouseenter', hoverProject)
});
projectTextOuter.forEach(btn => {
    btn.addEventListener('mouseleave', unhoverProject)
});
closeButton.addEventListener('click', closeModal);



window.onclick = function (event) {
    if (event.target == modal) {
        closeModal()
    }
}

var flkty = new Flickity(carousel, {
    // options
    cellAlign: 'center',
    contain: true,
    wrapAround: true
});