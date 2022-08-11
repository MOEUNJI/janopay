const header = document.querySelector(".web-header");
    const headerHeight = header.offsetHeight;
    window.onscroll = function () {
        if (window.scrollY >= 68) {
            header.style.color="#fff";
        } else {
            header.style.color="none";  
        }
    }