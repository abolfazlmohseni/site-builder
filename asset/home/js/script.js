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
// slider prodact
let i = 0
prodactElem = $.querySelectorAll(".sectionTree-layers__items")
setInterval(function () {
    if (i == 0) {
        prodactElem[i].classList = "sectionTree-layers__items layers-active"
        prodactElem[i + 1].classList = "sectionTree-layers__items layers-left"
        prodactElem[i + 2].classList = "sectionTree-layers__items layers-right"

    } else if (i < 9) {
        prodactElem[i].classList = "sectionTree-layers__items layers-active"
        prodactElem[i + 1].classList = "sectionTree-layers__items layers-left"
        prodactElem[i + 2].classList = "sectionTree-layers__items layers-right"

        prodactElem[i - 1].classList = "sectionTree-layers__items layers-active"
        prodactElem[i - 2].classList = "sectionTree-layers__items layers-left"
        prodactElem[i - 3].classList = "sectionTree-layers__items layers-right"
        console.log("salam")
    } else if (i < 10) {
        prodactElem[i].classList = "sectionTree-layers__items layers-active"
        prodactElem[i + 1].classList = "sectionTree-layers__items layers-left"
        prodactElem[i - 1].classList = "sectionTree-layers__items layers-right"
        console.log("salam")

        prodactElem[i - 1].classList = "sectionTree-layers__items layers-active"
        prodactElem[i - 2].classList = "sectionTree-layers__items layers-left"
        prodactElem[i - 3].classList = "sectionTree-layers__items layers-right"
    } else if (i == 10) {
        prodactElem[i].classList = "sectionTree-layers__items layers-active"
        prodactElem[i - 1].classList = "sectionTree-layers__items layers-left"
        prodactElem[i - 2].classList = "sectionTree-layers__items layers-right"
        console.log("salam")

        prodactElem[i - 1].classList = "sectionTree-layers__items layers-active"
        prodactElem[i - 3].classList = "sectionTree-layers__items layers-left"
        prodactElem[i - 4].classList = "sectionTree-layers__items layers-right"
    } else {
        i = 0
        console.log("reset time")
    }
    i++
}, 2000)





// slider prodact End !

//Loader Website!
// const LoaderElem = document.querySelector(".Loader")

// function LoadedDocumentHandler() {
//     LoaderElem.style.display = "none"
// }


// document.addEventListener("DOMContentLoaded",LoadedDocumentHandler)
