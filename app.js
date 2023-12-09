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

const navbar = document.querySelector(".navbar");
const navColor = document.querySelector(".navColor");
const topArrow = document.querySelector(".topArrow");

window.addEventListener("scroll", (e) => {
  const scrollHeight = window.pageYOffset;
  const navbarHeight = navbar.getBoundingClientRect().height;

  console.log(navbarHeight, scrollHeight);
  if (scrollHeight > navbarHeight) {
    navbar.classList.add("fixed-navbar");
    navColor.classList.add("showNavColor");
    // navColor.style.color = "#0c887a";
  } else {
    navbar.classList.remove("fixed-navbar");
  }
  if (scrollHeight > 100) {
    topArrow.classList.add("showArrow");
  } else {
    topArrow.classList.remove("showArrow");
  }
});
