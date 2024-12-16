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
    right: document.querySelector('.layers-right'),
    active: document.querySelector('.layers-active'),
    left: document.querySelector('.layers-left')
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

//Loader Website!
// const LoaderElem = document.querySelector(".Loader")

// function LoadedDocumentHandler() {
//     LoaderElem.style.display = "none"
// }


// document.addEventListener("DOMContentLoaded",LoadedDocumentHandler)
