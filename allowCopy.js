// ==UserScript==
// @name         解除网页复制限制
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  允许复制、右键、选择文本
// @match        *://*/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // 1. 允许选中
    const style = document.createElement('style');
    style.innerHTML = `
        * {
            user-select: text !important;
            -webkit-user-select: text !important;
        }
    `;
    document.head.appendChild(style);

    // 2. 移除事件限制
    const events = ['copy', 'cut', 'paste', 'selectstart', 'contextmenu'];

    events.forEach(event => {
        document.addEventListener(event, e => {
            e.stopPropagation();
        }, true);
    });

    // 3. 清除 inline 事件
    document.querySelectorAll('*').forEach(el => {
        el.oncopy = null;
        el.oncut = null;
        el.onpaste = null;
        el.oncontextmenu = null;
        el.onselectstart = null;
    });

    console.log('复制限制已解除');
})();
