// ==UserScript==
// @name Cuevana Multimedia Keys
// @namespace http://github.com/jfgomez86/greasemonkey
// @version 0.0.1
// @description This script enables the use of Multimedia keys on http://cuevana.com
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
      f = ({
        39: function (ctrlKey) {
          $("div[title=Next episode]").click();
        },
        37: function (ctrlKey) {
          $("div[title=Previous episode]").click();
        }
      })[evt.keyCode];

      if (f) f(evt.ctrlKey);
    });
  });
})(jQuery.noConflict());
