// ==UserScript==
// @name         多邻国刷单词脚本
// @namespace    http://tampermonkey.net/
// @version      2024-12-09
// @description  1. 页面添加按钮控制是否开启功能 2. 上下左右控制选项
// @author       You
// @match        https://det.91ddedu.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=91ddedu.com
// @grant        none
// ==/UserScript==

(function () {
  "use strict";
  // 添加按钮

  let yesEle, noEle, nextEle, prevEle;

  const KEY_TO_ELEMENT_MAP = {
    get ArrowUp() {
      return prevEle; // 动态返回当前的 prevEle 值
    },
    get ArrowDown() {
      return nextEle; // 动态返回当前的 nextEle 值
    },
    get ArrowLeft() {
      return yesEle; // 动态返回当前的 yesEle 值
    },
    get ArrowRight() {
      return noEle; // 动态返回当前的 noEle 值
    },
  };
  const getButtonElement = () => {
    const divs = document.querySelectorAll("div");

    nextEle = Array.from(divs).find((div) => {
      for (const child of div.childNodes) {
        if (
          child.nodeType === Node.TEXT_NODE &&
          child.textContent.trim() === "下一题"
        ) {
          return true;
        }
      }
      return false;
    });
    prevEle = Array.from(divs).find((div) => {
      for (const child of div.childNodes) {
        if (
          child.nodeType === Node.TEXT_NODE &&
          child.textContent.trim() === "上一题"
        ) {
          return true;
        }
      }
      return false;
    });

    const buttons = document.querySelectorAll("button");

    yesEle = Array.from(buttons).find((button) => {
      const spans = button.querySelectorAll("span");
      return Array.from(spans).some(
        (span) => span.textContent.trim() === "Yes"
      );
    });

    noEle = Array.from(buttons).find((button) => {
      const spans = button.querySelectorAll("span");
      return Array.from(spans).some((span) => span.textContent.trim() === "No");
    });

    if (prevEle && nextEle && yesEle && noEle) {
      console.log("获取按钮成功");
    }
  };

  const addButtonToPage = () => {};

  let useInWord = false;

  const handleButtonClick = () => {
    if (!useInWord) {
      window.addEventListener("keydown", handlePressKeyBoard);
    } else {
      window.removeEventListener("keydown", handlePressKeyBoard);
    }
    useInWord = !useInWord;
  };

  const handlePressKeyBoard = (e) => {
    console.log("keydown", e);
    const key = e?.key;
    if (!key) {
      return;
    }

    const ele = KEY_TO_ELEMENT_MAP[key];
    if (!ele) {
      return;
    }
    ele.click();
    // 页面元素更新，重新获取按钮
    setTimeout(() => {
      getButtonElement();
    }, 500);
  };

  const initEvent = () => {
    console.log("initEvent");
    window.addEventListener("keydown", handlePressKeyBoard);
  };

  // Your code here...
  // addButtonToPage();

  initEvent();

  setTimeout(() => {
    getButtonElement();
  }, 2000);
})();
