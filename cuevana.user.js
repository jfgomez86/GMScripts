// ==UserScript==
// @name Cuevana Multimedia Keys
// @namespace http://github.com/jfgomez86/greasemonkey
// @version 0.1.2
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
          if (ctrlKey) {
            $("div[title=Next episode]").click();
            evt.preventDefault();
          }
        },
        37: function (ctrlKey) {
          if (ctrlKey) {
            $("div[title=Previous episode]").click();
            evt.preventDefault();
          }
        }
      })[evt.keyCode];

      if (f) f(evt.ctrlKey || evt.metaKey);
    });
  });
})(jQuery.noConflict());
