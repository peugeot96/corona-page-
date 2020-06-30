const iconmenu = document.getElementById("icon-menu")

const mainnav = document.getElementById("main-nav")

iconmenu.addEventListener('click', ()=> {

    mainnav.classList.toggle("show-nav")

    iconmenu.classList.toggle("toggle")
})