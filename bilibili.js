// ==UserScript==
// @name         b站
// @namespace    http://tampermonkey.net/
// @version      2024-03-16
// @description  隐藏b站多余元素
// @author       You
// @match        https://*.bilibili.com/*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// ==/UserScript==

(function () {
  "use strict";

  const MAIN_PAGE_HOST = "www.bilibili.com";

  const MAIN_PAGE_PATH = "/";

  const isMainPage = () => {
    return (
      window.location.host === MAIN_PAGE_HOST &&
      MAIN_PAGE_PATH === window.location.pathname
    );
  };

  // 如果是主页，就跳转到订阅列表
  if (isMainPage()) {
    window.location.href = "https://t.bilibili.com/";
  }

  // 设置隐藏的元素
  const notDisplaySelectorList = [
    "aside.left",
    "aside.right",
    "div.right-container",
    //"div#biliMainHeader",
    ".bili-dyn-publishing",
    //"#bili-header-container",
    ".bili-dyn-up-list",
    ".bili-dyn-list-tabs",
    ".bili-dyn-sidebar",
    ".trending",
    ".left-entry",
    ".right-entry",
  ];

  const css = `
      ${notDisplaySelectorList.join(",")}{
          display: none !important;
      }
  `;

  const head = document.head || document.getElementsByTagName("head")[0];
  const style = document.createElement("style");
  head.appendChild(style);
  style.type = "text/css";
  style.appendChild(document.createTextNode(css));

  const intervalId = setInterval(() => {
    const navSearchInputElement =
      document.getElementsByClassName("nav-search-input")[0];

    if (navSearchInputElement?.placeholder) {
      navSearchInputElement.placeholder = "";
      navSearchInputElement.title = "";

      clearInterval(intervalId);
    }
  }, 100);
})();
