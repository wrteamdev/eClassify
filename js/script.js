(function ($) {
  "use strict";

  //Add OnepageNav / Sidebar
  function sideNav() {
    if ($(".menu-box .sticky-menu").length) {
      $(".menu-box .sticky-menu ul").onePageNav({
        changeHash: false,
        scrollSpeed: 750,
        scrollThreshold: 0.5,
        filter: '',
        easing: 'swing',
      });
    }
  }

  //Add Scroll Bar To Sidebar
  if ($("#sidebar .menu-box").length) {
    $("#sidebar .menu-box").mCustomScrollbar({
      axis: "y",
      autoExpandScrollbar: false,
    });
  }

  //animate to top on Page Refresh
  // $("html, body").animate({
  //     scrollTop: $("html, body").offset().top,
  //   },
  //   1000
  // );

  $("pre.code").highlight();

  /* ==========================================================================
   When document is ready, do
   ========================================================================== */

  $(document).on("ready", function () {
    sideNav();
    $("#sidebar .menu-box").mCustomScrollbar({
      axis:"yx", //set both axis scrollbars
      advanced:{autoExpandHorizontalScroll:true}, //auto-expand content to accommodate floated elements
      // change mouse-wheel axis on-the-fly
      callbacks:{
        onOverflowY:function(){
          var opt=$(this).data("mCS").opt;
          if(opt.mouseWheel.axis!=="y") opt.mouseWheel.axis="y";
        },
        onOverflowX:function(){
          var opt=$(this).data("mCS").opt;
          if(opt.mouseWheel.axis!=="x") opt.mouseWheel.axis="x";
        },
      }
    });
    // setTimeout(function() {
    //   window.location = window.location.hash;
    // },1000)
  });

  $(".sub-menu ul").hide();
  $(".sub-menu a").click(function () {
    $(this).parent(".sub-menu").children("ul").slideToggle("100");
    $(this).find(".right").toggleClass("fa-caret-up fa-caret-down");
  });
	
})(window.jQuery);
