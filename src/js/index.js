$(function () {
  if (!/msie [6|7|8|9]/i.test(navigator.userAgent)) {
    new WOW().init()
  }
  $("#header_block")
    .find(".nav-item:eq(0)")
    .find(".header_nav_item")
    .addClass("active")
})
