 console.log("welcome");


const scrollBtn = document.createElement("button");
scrollBtn.innerHTML = '<span class="material-icons">expand_less</span >';
scrollBtn.setAttribute("id", "scroll-btn");
document.body.appendChild(scrollBtn);

const scrollBtnDisplay = function () {
    window.scrollY > 550
        ? scrollBtn.classList.add("show")
        : scrollBtn.classList.remove("show");
};
window.addEventListener("scroll", scrollBtnDisplay);

const scrollWindow = function () {
    if (window.scrollY != 0) {
        setTimeout(function () {
            window.scrollTo(0, window.scrollY - 50);
            scrollWindow();
        }, 10);
    }
};
scrollBtn.addEventListener("click", scrollWindow);