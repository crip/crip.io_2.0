(function() {
 
  'use strict';

  var MenuSetup = {

    init: function() {

      this.starter();

    },

    starter: function() {

      var menuBtn = $(".menu-icon"),
          mainMenu = $("#main-menu");

      menuBtn.on("click", function (e) {
        e.preventDefault();
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

  var Currentyear = {

    init: function() {

      this.starter();

    },

    starter: function() {

      var yearWrapper = $(".year"),
          year = new Date().getFullYear();

      yearWrapper.text(year);

    }
  };

  $(function() {

    MenuSetup.init();
    Fullvideos.init();
    Currentyear.init();

  });
 
}());
