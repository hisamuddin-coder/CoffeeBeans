// const navToggle = document.querySelector(".nav-toggle");
// const navClose = document.querySelector(".btn-close");
// const linksContainer = document.querySelector(".nav-link-container");
// const navLinks = document.querySelector(".nav-links");

// navToggle.addEventListener("click", () => {
//   const linksContainerWidth = linksContainer.getBoundingClientRect().width;
//   if (linksContainerWidth === 0) {
//     linksContainer.style.width = "100vw";
//   }
// });
// navClose.addEventListener("click", () => {
//   const linksContainerWidth = linksContainer.getBoundingClientRect().height;
//   if (linksContainerWidth > 0) {
//     linksContainer.style.width = 0;
//   }
// });

const btnNavOpen = document.querySelector(".btn-nav-open");
const btnNavClose = document.querySelector(".btn-nav-close");
const navContainer = document.querySelector(".nav-link-container");
const links = document.querySelectorAll(".nav-link");

btnNavOpen.addEventListener("click", () => {
  navContainer.classList.add("active");
  links.forEach((link) => {
    link.classList.add("active");
  });
});
btnNavClose.addEventListener("click", () => {
  navContainer.classList.remove("active");
  links.forEach((link) => {
    link.classList.remove("active");
  });
});
