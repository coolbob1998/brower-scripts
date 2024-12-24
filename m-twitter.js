// ==UserScript==
// @name         m-twitter
// @namespace    http://tampermonkey.net/
// @version      2024-12-24
// @description  移动端推特隐藏多余元素
// @author       coolbob
// @match        https://x.com/*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// ==/UserScript==

(function () {
  "use strict";

  const notDisplaySelectorList = [];

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
