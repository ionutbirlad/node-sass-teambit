$(document).ready(function () {

// HEADER ONSCROLL
  var navTop = $("header");
  var navMain = $(".hidden-header");

  window.onscroll = function sticky() {
    if (window.pageYOffset > navMain[0].offsetTop) {
      navTop[0].classList.add("hd");
      // $("header").css("margin-top", "10px");
      navMain[0].classList.remove("hd");
    } else {
      navTop[0].classList.remove("hd");
      // $("header").css("margin-top", "0px");
      navMain[0].classList.add("hd");
    }
  }
// HEADER ONSCROLL


// DROPDOWN HEADER
  $(document).on("mouseenter", "nav li:first-child", function () {
      // $(".dropdown-outer:visible").hide();
      $(this).find(".dropdown-outer").show(300);



  });

  $(document).on("mouseleave", ".dropdown-outer:visible", function () {

    $(this).hide(300);


  });





// DROPDOWN HEADER



});
