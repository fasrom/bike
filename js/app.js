function ibg() {

   let ibg = document.querySelectorAll(".ibg");
   for (var i = 0; i < ibg.length; i++) {
      if (ibg[i].querySelector('img')) {
         ibg[i].style.backgroundImage = 'url(' + ibg[i].querySelector('img').getAttribute('src') + ')';
      }
   }
}

ibg();


$(function () {


   /*Fixed header*/

   let header = $("#header");
   let intro = $("#intro");
   let introH = intro.innerHeight();
   let scrollPos = $(window).scrollTop();

   let nav = $("#nav");
   let navToggle = $("#navToggle");

   checkScroll(scrollPos, introH);

   $(window).on("scroll resize", function () {
      introH = intro.innerHeight();
      scrollPos = $(this).scrollTop();

      checkScroll(scrollPos, introH);

   });
   function checkScroll(scrollPos, introH) {
      if (scrollPos > (introH - 61)) {
         header.addClass("fixed");

      } else {
         header.removeClass("fixed");
      }
   }






   /*Smooth scroll*/
   $("[data-scroll]").on("click", function (event) {
      event.preventDefault();

      let elementId = $(this).data('scroll');
      let elementOffset = $(elementId).offset().top;

      nav.removeClass("show");


      $("html, body").animate({
         scrollTop: elementOffset - 50
      }, 1000)


   });


   /*Nav Toggle*/


   navToggle.on("click", function (event) {
      event.preventDefault();
      nav.toggleClass("show");
      navToggle.toggleClass("show");

   })
   $(".header__link, .header__logo").on("click", function (event) {
      event.preventDefault();

      nav.removeClass("show");
      navToggle.removeClass("show");

   })

   /*slider://kenwheeler.github.io/slick/*/
   let slider = $("#reviewsSlider");
   slider.slick({
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      fade: true,
      arrows: false,
      dots: true

   });


});

