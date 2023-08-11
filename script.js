//Toggle dark mode
function toggleMode() {
    //Header
    let head=document.getElementsByTagName('header');
    if (head[0].classList.contains("header-dark")) {
        head[0].classList.remove("header-dark");
    } else {
        head[0].classList.add("header-dark");
    }
}