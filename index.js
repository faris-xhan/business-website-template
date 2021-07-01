const openNav = document.querySelector(".open-nav");
const closeNav = document.querySelector(".close-nav");
const nav = document.querySelector(".mobile-nav-bar");
openNav.onclick = (e) => {
  nav.style.width = "100%";
};

closeNav.onclick = (e) => {
  nav.style.width = "0";
};

const navBtns = nav.querySelectorAll("a");
navBtns.forEach((btn) => {
  btn.onclick = (e) => {
    nav.style.width = "0";
  };
});
