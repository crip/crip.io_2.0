(function() {
 
  'use strict';

  var MenuSetup = {
    init: function() {
      this.starter();
    },
    starter: function() {
      /**
       * Responsive hamburger
       */
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
      /**
       * Responsive media in posts
       */
      var container = $(".page-content");
      container.fitVids();
    }
  };

  var Currentyear = {
    init: function() {
      this.starter();
    },
    starter: function() {
      /**
       * Update the footer copyright with the current year
       */
      var yearWrapper = $(".year"),
          year = new Date().getFullYear();
      
      yearWrapper.text(year);
    }
  };

  var Cripspiration = {
    init: function () {
      this.starter();
    },
    starter: function () {
      var $form = $('#cripspiration'),
          $submit = $('#submit'),
          $messages = $('#messages'),
          errorMsg = 'Could not connect to the server. Please try again later.';

      /**
       * Prevent the form from submitting
       * before the ajax function is ready
       */
      $submit.on('click', function(event) {
        if (event) event.preventDefault();
        register($form);
      });

      /**
       * Ajax post to mailchimp
       */
      function register($form) {
        $.ajax({
          type: $form.attr('method'),
          url: $form.attr('action'),
          data: $form.serialize(),
          cache: false,
          dataType: 'json',
          contentType: 'application/json; charset=utf-8',
          error: function (err) {
            $messages.html('<span class="error">' + errorMsg + '</span>')
          },
          success: function (data) {
            if (data.result != 'success') {
              var message = data.msg.substring(4);
              $messages.html('<span class="error">' + message + '</span>');
            } else {
              var message = data.msg;
              $messages.html('<span class="success">' + message + '</span>');
            }
          }
        });
      }
    }
  };

  $(function() {

    MenuSetup.init();
    Fullvideos.init();
    Currentyear.init();
    Cripspiration.init();

  });
 
  /**
   * Audio.js
   */
  audiojs.events.ready(function() { 
    audiojs.createAll();
  });
}());
