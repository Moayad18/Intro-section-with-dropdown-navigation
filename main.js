let features = document.querySelector("main header nav ul.main.features");
let company = document.querySelector("main header nav ul.main.company");
let menu = document.querySelector("main header .menu");
let close = document.querySelector("main header .close-menu");
let nav = document.querySelector("main header nav");

features.addEventListener("click", function () {
  let featuresUl = document.querySelector(
    "main header nav ul.secondary.features"
  );
  featuresUl.parentElement.classList.toggle("show");
});

company.addEventListener("click", function () {
  let companyUl = document.querySelector(
    "main header nav ul.secondary.company"
  );
  companyUl.parentElement.classList.toggle("show");
});

menu.addEventListener("click", function () {
  menu.style.cssText = "display: none";
  nav.style.cssText = "display: block";
  close.style.cssText = "display: block";
});
close.addEventListener("click", function () {
  menu.style.cssText = "display: block";
  nav.style.cssText = "display: none";
  close.style.cssText = "display: none";
});
