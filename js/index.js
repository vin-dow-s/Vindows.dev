function toggleMobileMenu(menu) {
    menu.classList.toggle('open');
    let pageContent = document.querySelector('.page-content');
    if (pageContent.style.display === "none") {
        pageContent.style.display = "block";
    } else {
        pageContent.style.display = "none";
    }
}

//Animation du background selon la position du curseur
window.onload = () => {
    document.body.addEventListener("pointermove", (e)=>{
        const { currentTarget: el, clientX: x, clientY: y } = e;
        const { top: t, left: l, width: w, height: h } = el.getBoundingClientRect();
        el.style.setProperty('--posX',  x-l-w/2);
        el.style.setProperty('--posY',  y-t-h/2);
    })
}
