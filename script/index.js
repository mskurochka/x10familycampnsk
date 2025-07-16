const burgerMenuBtn = document.querySelector("#burger-menu-btn")
const burgerMenu = document.querySelector("#burger-menu")
const burgerMenuClose = document.querySelector("#burger-menu-close")

burgerMenuBtn.addEventListener("click",()=>{
    burgerMenu.style.left = "0px"
})
burgerMenuClose.addEventListener("click",()=>{
    burgerMenu.style.left = "-500px"
})

const links = ["#about-us", "#our-events", "#contact"]
nav.forEach((link, n) => {
    link.addEventListener("click", (event) => {
        event.preventDefault()
        const element = document.querySelector(links[n])
        element.scrollIntoView({ behavior: "smooth" })
    })
})