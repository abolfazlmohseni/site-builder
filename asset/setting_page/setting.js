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
