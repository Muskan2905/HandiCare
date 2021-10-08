// Tag Selectors
const stickyNav = document.querySelector("nav");
const togglerButton = document.querySelector(".check-togglerbtn");
// const navItems = document.querySelector(".nav-ul");

window.addEventListener("scroll",()=>{
stickyNav.classList.toggle("sticky",window.scrollY > 0);
});

// //Toggler button fxn for navbar
togglerButton.addEventListener("click", function () {
    togglerButton.classList.toggle("toggle-icon");
    background.classList.toggle("hide-background");
});
