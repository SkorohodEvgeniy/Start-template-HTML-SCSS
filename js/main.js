/* Menu Burger Jquery*/
/*
$(document).ready(function () {
  $(".header__burger").click(function (event) {
    $(".header__burger, .header__menu").toggleClass("active");
    $("body").toggleClass("lock");
  });
});
*/

/*------ Menu Burger JS ------*/
const headerBurger = document.querySelector(".header__burger");
const headerMenu = document.querySelector(".header__menu");
const body = document.getElementsByTagName("body");

headerBurger.addEventListener("click", toggleBurgerMenu = () => {
    headerBurger.classList.toggle("active");
    headerMenu.classList.toggle("active");
    body.classList.toggle("lock");
});

/*---Arrow Menu---*/
const arrow = document.querySelector(".menu-item-has-children");
arrow.addEventListener("click", arrowClick = () => {
    arrow.classList.toggle("show");
});