// ==UserScript==
// @name         youtube
// @namespace    http://tampermonkey.net/
// @version      2024-03-16
// @description  油管隐藏多余元素
// @author       You
// @match        https://www.youtube.com/*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// ==/UserScript==

(function () {
  "use strict";

  const notDisplaySelectorList = ["#secondary", "ytd-rich-section-renderer"];

  const css = `
      ${notDisplaySelectorList.join(",")}{
          display: none !important;
      }
  `;

  var head = document.head || document.getElementsByTagName("head")[0];
  var style = document.createElement("style");
  head.appendChild(style);
  style.type = "text/css";
  style.appendChild(document.createTextNode(css));
})();
