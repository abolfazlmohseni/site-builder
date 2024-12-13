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


//Loader Website!
// const LoaderElem = document.querySelector(".Loader")

// function LoadedDocumentHandler() {
//     LoaderElem.style.display = "none"
// }


// document.addEventListener("DOMContentLoaded",LoadedDocumentHandler)
