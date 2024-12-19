// let $ = document;

const acarseionElem = $.querySelectorAll(".acarseion");

acarseionElem.forEach(function (item) {
    item.addEventListener("click", function () {
        const capshonBox = item.querySelector(".capshon-box");

        if (capshonBox.classList.contains("none")) {
            capshonBox.classList.remove("none");
            capshonBox.classList.add("active");
        } else {
            capshonBox.classList.remove("active");
            capshonBox.classList.add("none");
        }
    });
});