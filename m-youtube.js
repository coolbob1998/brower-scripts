// ==UserScript==
// @name         m-youtube
// @namespace    http://tampermonkey.net/
// @version      2024-12-24
// @description  移动端油管隐藏多余元素
// @author       coolbob
// @match        https://m.youtube.com/*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// ==/UserScript==

(function () {
  "use strict";

  const notDisplaySelectorList = [
    "ytm-pivot-bar-renderer",
    "ytm-channel-list-sub-menu-renderer",
    "ytm-reel-shelf-renderer",
    "ytm-companion-slot",
    `ytm-item-section-renderer[section-identifier="related-items"]`,
    "ytm-home-logo",
  ];

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
