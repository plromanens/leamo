var burger = document.querySelector(".burger");
var dropdown = document.querySelector(".dropdown");

var openBurger = function () {
  dropdown.classList.toggle("is-open");
};

burger.addEventListener("click", openBurger);
