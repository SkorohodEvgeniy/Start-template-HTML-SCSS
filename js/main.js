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

/* ----- Accordion 1ver
$(document).ready(function () {
    $(".accordion__title").click(function (event) {
        if ($(".accordion").hasClass("one")) {
            $(".accordion__title").not($(this)).removeClass("active");
            $(".accordion__text").not($(this).next()).slideUp(300);
        }
        $(this).toggleClass("active").next().slideToggle(300);
    });
});
*/
/* ----- Accordion 2ver
   (function () {
    var initAccordion = function (itemsClass, headerClass, bodyClass) {
        var $items = $(itemsClass);

        $items.find(headerClass).on('click', function () {
            $item = $(this).parent();
            $items.not($item).removeClass('is-open');
            $items.not($item).find(headerClass).removeClass('is-open');
            $items.not($item).find(bodyClass).slideUp(250);


            if ($(this).hasClass('is-open')) {
                $item.removeClass('is-open');
                $(this).removeClass('is-open');
                $(this).siblings(bodyClass).slideUp(250);

            } else {
                $item.addClass('is-open');
                $(this).addClass('is-open');
                $(this).siblings(bodyClass).slideDown(250);

            }
        });
    };

    // suppliers
    initAccordion('.faq__inner', '.faq__inner-header', '.faq__inner-body');


})($);
// end accordion --------*/