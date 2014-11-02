(function() {
 
  'use strict';

  var MenuSetup = {

    init: function() {

      this.starter();

    },

    starter: function() {

      var menuBtn = $(".menu-icon"),
          mainMenu = $("#main-menu");

      menuBtn.on("click", function () {
        $(this).toggleClass('open');
        mainMenu.toggleClass('open-menu');
      });

    }

  };

  var Fullvideos = {
    init: function() {

      this.starter();

    },

    starter: function() {

      var container = $(".page-content");

      container.fitVids();

    }

  };

  $(function() {

    MenuSetup.init();
    Fullvideos.init();

  });
 
}());
