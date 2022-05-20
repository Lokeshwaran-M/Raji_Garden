// navigation toggle
const toggleButton = document.getElementsByClassName("navbar-toggle")[0];
const navbarLinks1 = document.getElementsByClassName("navbar-link1")[0];
const navbarLinks2 = document.getElementsByClassName("navbar-link2")[0];
const navbarLinks3 = document.getElementsByClassName("navbar-link3")[0];
const navbarLinks4 = document.getElementsByClassName("navbar-link4")[0];
const navbarLinks5 = document.getElementsByClassName("navbar-link5")[0];
const navbarLinks6 = document.getElementsByClassName("navbar-link6")[0];
const navbarLinks7 = document.getElementsByClassName("navbar-link7")[0];
toggleButton.addEventListener("click", () => {
  navbarLinks1.classList.toggle("active");
  navbarLinks2.classList.toggle("active");
  navbarLinks3.classList.toggle("active");
  navbarLinks4.classList.toggle("active");
  navbarLinks5.classList.toggle("active");
  navbarLinks6.classList.toggle("active");
  navbarLinks7.classList.toggle("active");
  
});
