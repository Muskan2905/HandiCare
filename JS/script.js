// Tag Selectors
const stickyNav = document.querySelector("nav");
const togglerButton = document.querySelector(".check-togglerbtn");
const dropdown = document.querySelector(".dropdown")
const dropdownContent = document.querySelector(".dropdown-content")
const margin = document.querySelector(".regbtn");

window.addEventListener("scroll",()=>{
stickyNav.classList.toggle("sticky",window.scrollY > 0);
});

// //Toggler button fxn for navbar
togglerButton.addEventListener("click", function () {
    togglerButton.classList.toggle("toggle-icon");
    background.classList.toggle("hide-background");
});

dropdown.addEventListener("click",function(){
    dropdownContent.classList.toggle("show");
    margin.classList.toggle("margin");
});


window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.querySelector(".dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }
