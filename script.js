// script.js

function toggleMoreAbout() {
    const moreAbout = document.getElementById("more-about");
    if (moreAbout.classList.contains("hidden")) {
        moreAbout.classList.remove("hidden");
    } else {
        moreAbout.classList.add("hidden");
    }
}
