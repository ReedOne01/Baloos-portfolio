const btn = document.getElementById("toggler");
const navContent = document.querySelector(".navContent");
const heroSection = document.querySelector(".heroSection");
const bar = document.querySelector(".bar");
const navBarToggler = document.querySelector(".navBar-toggler");

btn.addEventListener("click", () => {
  navContent.classList.toggle("active");
  bar.classList.toggle("active");
  navBarToggler.classList.toggle("active");
  heroSection.classList.toggle("active");
});
