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
    fetch("../js/projects.json")
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
    const imgHolders = carousel.querySelectorAll('.carousel-cell');
    const header = modal.querySelector('.modalHead');
    const sub = modal.querySelector('.modalSub');
    const text = modal.querySelector('.modalDesc');
    const buttonLink = modal.querySelector('.link');

    for (i = 0; i < imgs.length; i++) {
        imgHolders[i].src = imgs[i];
    }

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

window.addEventListener('scroll', stickNav);
window.addEventListener('load', stickNav);
projectPreviewButton.forEach(btn => {btn.addEventListener('click', handleModal)});
closeButton.addEventListener('click', closeModal);


window.onclick = function (event) {
    if (event.target == modal) {
        closeModal()
    }
}

var flkty = new Flickity( carousel, {
    // options
    cellAlign: 'center',
    contain: true,
    wrapAround: true,
    adaptiveHeight: true
  });

  