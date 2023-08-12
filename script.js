//Toggle dark mode
function toggleMode() {
    //Header
    let head=document.getElementsByTagName("header");
    head[0].classList.toggle("header-dark");

    //cover
    let coverSection=document.getElementById("cover");
    coverSection.classList.toggle("cover-dark");

}