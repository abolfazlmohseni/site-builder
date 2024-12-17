let $ = document
const themeBTN = $.querySelector(".theme")
const bodyElem = $.querySelector("body")
let flagTheme = localStorage.getItem("theme")
// theme Website
if (flagTheme == "dark") {
    bodyElem.classList = "darkB"
}

themeBTN.addEventListener("click", function () {
    if (bodyElem.classList == "darkB") {
        bodyElem.classList = ""
        localStorage.setItem("theme", "Light")
    }
    else {
        bodyElem.classList = "darkB"
        localStorage.setItem("theme", "dark")
    }
})
// theme Website End !
// highlightLayer

const layers = {
    right: $.querySelector('.layers-right'),
    active: $.querySelector('.layers-active'),
    left: $.querySelector('.layers-left')
};

const resetStyles = () => {
    for (let key in layers) {
        layers[key].style.transform = 'scale(0.80)';
        layers[key].style.filter = 'blur(3px)';
    }
};

const highlightLayer = (target) => {
    resetStyles();
    target.style.transform = 'scale(1)';
    target.style.filter = 'blur(0px)';
};

layers.right.addEventListener('mouseenter', () => highlightLayer(layers.right));
layers.active.addEventListener('mouseenter', () => highlightLayer(layers.active));
layers.left.addEventListener('mouseenter', () => highlightLayer(layers.left));


// highlightLayer End !

// menu
const showMenuElem = $.querySelector(".show-menu")
const Menu = $.querySelector(".Navbar-Container")
showMenuElem.addEventListener("click", function () {
    if (showMenuElem.classList == "show-menu none") {
        showMenuElem.classList = 'show-menu activ'
        Menu.style.right = "0px"
    } else {
        showMenuElem.classList = 'show-menu none'
        Menu.style.right = "-300px"
    }
})
// menu End !

//Loader Website!
// const LoaderElem = document.querySelector(".Loader")

// function LoadedDocumentHandler() {
//     LoaderElem.style.display = "none"
// }


// document.addEventListener("DOMContentLoaded",LoadedDocumentHandler)
