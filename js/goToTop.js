goToTop = document.getElementById("goToTop");

document.querySelector('body').addEventListener('scroll', () => {
    onWindowScroll();
});


function onWindowScroll() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        goToTop.style.display = "block";
    } else {
        goToTop.style.display = "none";
    }
}

function scrollToPosition(postion){
    document.body.scrollTop = postion;
    document.documentElement.scrollTop = postion;
}



