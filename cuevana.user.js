// ==UserScript==
// @name Cuevana Multimedia Keys
// @namespace http://github.com/jfgomez86/greasemonkey
// @version 0.1.3
// @description This script enables the use of Multimedia keys on http://cuevana.com. For chrome use TamperMonkey
// @include http://*.cuevana.com/series/*
// @require http://code.jquery.com/jquery-1.4.3.min.js
// @copyright  2010+, Jose Gomez
// ==/UserScript==

(function ($) {
  var f;

  $(window).load(function () {
    $(document.body).keydown(function (evt) {

      // 39: Right
      // 37: Left
      // 32: Space
      f = ({
        39: function () {
          $("div.epi_sig").click();
        },
        37: function () {
          $("div.epi_ant").click();
        },
        32: function () {
          // TODO: Doesn't work right now
          $("#player_frame").get(0).contentWindow.document.getElementsByClassName("boton1")[0].onclick()
        }
      })[evt.keyCode];

      if (f && (evt.ctrlKey || evt.metaKey || evt.altKey)) {
        f();
        evt.preventDefault();
      };
    });
  });
})(jQuery.noConflict());
