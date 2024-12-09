const LoaderElem = document.querySelector(".Loader")

function LoadedDocumentHandler() {
    LoaderElem.style.display = "none"
}


document.addEventListener("DOMContentLoaded",LoadedDocumentHandler)
