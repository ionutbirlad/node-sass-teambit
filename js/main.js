$(document).ready(function () {

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



});
