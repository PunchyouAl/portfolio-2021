/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./js/script.js":
/*!**********************!*\
  !*** ./js/script.js ***!
  \**********************/
/***/ (() => {

eval("// NAV SCROLL\n\nconst body = document.querySelector('body');\nconst nav = document.querySelector('#nav');\nconst hero = document.querySelector('#hero');\nconst projects = document.querySelector('#projects');\nconst projectPreviewButton = projects.querySelectorAll('.btn');\nconst modal = document.querySelector('.modal');\nconst modalContent = modal.querySelector('.modal-content');\nconst backdrop = document.querySelector('.modal-backdrop');\nconst closeButton = modal.querySelector('.close');\nconst carousel = document.querySelector('.main-carousel');\nconst yearFooter = document.querySelector('#currentYear');\n\nlet height = hero.getBoundingClientRect();\n\nfunction stickNav() {\n    // console.log(`${height.height} + ${window.scrollY}`);\n    height = hero.getBoundingClientRect();\n    if (height.height < window.scrollY) {\n        nav.classList.add(\"fixed\");\n        projects.classList.add(\"navActive\");\n    } else {\n        nav.classList.remove(\"fixed\");\n        projects.classList.remove(\"navActive\");\n    }\n}\n\nfunction handleModal() {\n    const dataset = this.dataset.number;\n    fetch(\"./projects.json\")\n    .then(response => response.json())\n    .then(data => fillModal(data.projects[dataset]))\n}\n\nfunction fillModal(data) {\n    let i;\n    const title = data.name;\n    const subtitle = data.subtitle;\n    const imgs = data.images;\n    const desc = data.description;\n    const link = data.link;\n    const imgHolders = carousel.querySelectorAll('.carousel-cell');\n    const header = modal.querySelector('.modalHead');\n    const sub = modal.querySelector('.modalSub');\n    const text = modal.querySelector('.modalDesc');\n    const buttonLink = modal.querySelector('.link');\n\n    for (i = 0; i < imgs.length; i++) {\n        imgHolders[i].src = imgs[i];\n    }\n\n    header.innerHTML = title;\n    sub.innerHTML = subtitle;\n    text.innerHTML = desc;\n\n    console.log(link);\n    \n    if (link == \"none\") {\n        buttonLink.classList.add(\"hidden\");\n    } else {\n        buttonLink.classList.remove(\"hidden\");\n        buttonLink.href = link;\n    }\n    \n    openModal();\n}\n\nfunction openModal() {\n\n    backdrop.style.opacity = 0.7;\n    backdrop.style.display = \"block\";\n    modal.style.pointerEvents = \"auto\";\n    modal.style.opacity = 1;\n    modal.style.pointerEvents = \"auto\";\n    modalContent.style.pointerEvents = \"auto\";\n    modal.classList.add('show');\n    toggleScrollable();\n\n}\nfunction closeModal() {\n\n    backdrop.style.opacity = 0;\n    backdrop.style.pointerEvents = \"none\";\n    modal.style.opacity = 0;\n    modal.style.pointerEvents = \"none\";\n    modalContent.style.pointerEvents = \"none\";\n    modal.classList.remove('show');\n    toggleScrollable()\n\n}\n\nfunction toggleScrollable() {\n    body.classList.toggle('modalOpen');\n}\n\nfunction setYear() {\n    const date = new Date();\n    const year = date.getFullYear();\n    yearFooter.innerHTML = year;\n}\n\nwindow.addEventListener('scroll', stickNav);\nwindow.addEventListener('load', stickNav);\nwindow.addEventListener('load', setYear);\nprojectPreviewButton.forEach(btn => {btn.addEventListener('click', handleModal)});\ncloseButton.addEventListener('click', closeModal);\n\n\nwindow.onclick = function (event) {\n    if (event.target == modal) {\n        closeModal()\n    }\n}\n\nvar flkty = new Flickity( carousel, {\n    // options\n    cellAlign: 'center',\n    contain: true,\n    wrapAround: true,\n    adaptiveHeight: true\n  });\n\n  \n\n//# sourceURL=webpack://portfolio-2021/./js/script.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
(() => {
/*!*******************!*\
  !*** ./js/app.js ***!
  \*******************/
eval("__webpack_require__(/*! ./script.js */ \"./js/script.js\");\n\n//# sourceURL=webpack://portfolio-2021/./js/app.js?");
})();

/******/ })()
;